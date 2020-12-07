import React from "react";

import * as ROUTES from "../constants/routes";
import Header from "../components/header";
import OptForm from "../components/opt-form";
import Feature from "../components/feature";

const HeaderContainer = ({ bg }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src="/images/logo.png" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Frame>

      <Feature>
        <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
        <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>

        <OptForm>
          <OptForm.Text>
            Ready to watch Netflix? Enter you email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>GET STARTED</OptForm.Button>
        </OptForm>
      </Feature>
    </Header>
  );
};

export default HeaderContainer;
