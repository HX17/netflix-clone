import React from "react";
import { Link } from "react-router-dom";

import { Background, Frame, Logo, ButtonLink } from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = ({ to, ...restProps }) => {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

export default Header;
