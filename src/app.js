import React from "react";
import { Router } from "@reach/router";
import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";
import { UserRedirects } from "./helpers/redirects";
import { useAuthListener } from "./hooks";

const App = () => {
  const user = useAuthListener();

  return (
    <Router>
      {UserRedirects(user)}
      <Home path={ROUTES.HOME} />
      <Browse path={ROUTES.BROWSE} />
      <SignIn path={ROUTES.SIGN_IN} />
      <SignUp path={ROUTES.SIGN_UP} />
    </Router>
  );
};

export default App;
