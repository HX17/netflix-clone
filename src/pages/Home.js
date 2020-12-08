import React from "react";

import OptForm from "../components/opt-form";
import Feature from "../components/feature";
import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/JumbotronContainer";
import FooterContainer from "../containers/FooterContainer";
import FaqsContainer from "../containers/FaqsContainer";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.Subtitle>
            Watch anywhere. Cancel at any time.
          </Feature.Subtitle>

          <OptForm>
            <OptForm.Text>
              Ready to watch Netflix? Enter you email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>GET STARTED</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
