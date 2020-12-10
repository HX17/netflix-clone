import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";

const Signup = ({ history }) => {
  const { firebase } = useContext(FirebaseContext);
  // const history = useHistory();

  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // check form input elements are valid
  const isInvalid = password === "" || email === "" || firstname === "";

  // email & password
  const signUpHandler = (e) => {
    e.preventDefault();

    // firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstname,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            console.log(result);
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((err) => {
        setFirstname("");
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={signUpHandler} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
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
              Sign up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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

export default Signup;
