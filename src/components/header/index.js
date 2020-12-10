import React from "react";
import { Link } from "react-router-dom";

import {
  Background,
  Frame,
  Group,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  TextLink,
  Picture,
  Profile,
  Dropdown,
} from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Feature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Header.FeatureCallOut = ({ children, ...restProps }) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.TextLink = ({ children, ...restProps }) => {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
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

Header.Picture = ({ src, ...restProps }) => {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Profile = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

export default Header;
