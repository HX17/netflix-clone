import React from "react";

import Profile from "../components/profile";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";

const ProfileContainer = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src="/images/logo.png" alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profile.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
};

export default ProfileContainer;
