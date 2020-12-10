import React from "react";
import { Container, Title, List, User, Picture, Name } from "./styles/profile";

const Profile = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Profile.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Profile.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

Profile.User = ({ children, ...restProps }) => {
  return <User {...restProps}>{children}</User>;
};

Profile.Picture = ({ src, ...restProps }) => {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
    />
  );
};

Profile.Name = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>;
};

export default Profile;
