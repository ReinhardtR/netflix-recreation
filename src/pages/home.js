import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Feature, OptForm } from "../components";

const Home = () => (
  <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>Unlimited films, TV shows, and more.</Feature.Title>
        <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
        </OptForm>
      </Feature>
    </HeaderContainer>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
  </>
);

export default Home;
