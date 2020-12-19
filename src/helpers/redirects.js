import React from "react";
import { Redirect } from "@reach/router";
import * as ROUTES from "../constants/routes";

export const UserRedirects = (user) => {
  if (user) {
    return [
      <Redirect
        from={ROUTES.HOME}
        to={ROUTES.BROWSE}
        key={ROUTES.HOME}
        noThrow
      />,
      <Redirect
        from={ROUTES.SIGN_IN}
        to={ROUTES.BROWSE}
        key={ROUTES.SIGN_IN}
        noThrow
      />,
      <Redirect
        from={ROUTES.SIGN_UP}
        to={ROUTES.BROWSE}
        key={ROUTES.SIGN_UP}
        noThrow
      />,
    ];
  } else {
    return (
      <Redirect
        from={ROUTES.BROWSE}
        to={ROUTES.HOME}
        key={ROUTES.BROWSE}
        noThrow
      />
    );
  }
};
