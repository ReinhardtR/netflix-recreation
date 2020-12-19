import React, { useContext, useState } from "react";
import { navigate } from "@reach/router";
import { FirebaseContext } from "../firebase/context";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

const SignUp = () => {
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [learnMore, setLearnMore] = useState(false);

  const isInvalid = password === "" || emailAddress === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already have an account?&nbsp;
            <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.&nbsp;
            {!learnMore && (
              <Form.LinkSmall onClick={() => setLearnMore(true)}>
                Learn more.
              </Form.LinkSmall>
            )}
          </Form.TextSmall>
          {learnMore && (
            <Form.TextSmall>
              The information collected by Google reCAPTCHA is subject to the
              Google&nbsp;
              <Form.LinkSmall>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </Form.LinkSmall>
              &nbsp;and&nbsp;
              <Form.LinkSmall>
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Service
                </a>
              </Form.LinkSmall>
              , and is used for providing, maintaining and improving the
              reCAPTCHA service and for general security purposes (it is not
              used for personalised advertising by Google).
            </Form.TextSmall>
          )}
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;
