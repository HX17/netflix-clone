import React from "react";

import {
  Container,
  Input,
  Text,
  TextSmall,
  Title,
  Error,
  Base,
  Link,
  Submit,
} from "./styles/form";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Form.Error = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

Form.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

Form.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export default Form;
