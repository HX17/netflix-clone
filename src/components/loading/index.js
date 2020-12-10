import React from "react";
import { Spinner, LockBody, Picture, ReleaseBody } from "./styles/loading";

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
};

Loading.ReleaseBody = () => {
  return <ReleaseBody />;
};

export default Loading;
