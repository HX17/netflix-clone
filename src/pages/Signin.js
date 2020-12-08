import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";

const Signin = () => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  console.log(history);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // check form input elements are valid
  const isInvalid = password === "" || email === "";

  // email & password
  const signInHandler = (e) => {
    e.preventDefault();

    // firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // push to the browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={signInHandler} method="POST">
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign in
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;
