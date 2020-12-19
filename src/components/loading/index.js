import React from "react";
import { Spinner, LockBody, Picture, ReleaseBody } from "./styles";

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`${process.env.PUBLIC_URL}/images/users/${src}.png`} />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

export default Loading;
