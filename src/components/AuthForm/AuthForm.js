import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import { TextButton, OutlinedButton } from "../Button/Button";
import TextField from "../TextField/TextField";
import StyledAuthForm from "./AuthForm.styles";

import googleIcon from "../../assets/Google.svg";
import { useState } from "react";

const AuthForm = ({ heading }) => {
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [repeatPassErr, setRepeatErr] = useState(false);

  const isValidSignUp = !(emailErr && passErr && repeatPassErr);
  const isValidLogin = !(emailErr && passErr);

  const submitHandler = (e) => {
    e.preventDefault();
    if (heading === "login") {
      isValidLogin ? console.log("worked") : console.log("error");
    } else {
      isValidSignUp ? console.log("worked") : console.log("error");
    }
  };

  return (
    <StyledAuthForm onSubmit={submitHandler}>
      <h1>{heading}</h1>
      <TextField
        type="email"
        placeholder="Email address"
        error={emailErr}
        setError={setEmailErr}
      />
      <TextField
        type="password"
        placeholder="Password"
        error={passErr}
        setError={setPassErr}
      />
      {heading === "login" ? (
        ""
      ) : (
        <TextField
          type="password"
          placeholder="Repeat Password"
          error={repeatPassErr}
          setError={setRepeatErr}
        />
      )}
      <TextButton
        type="submit"
        text={
          heading === "login" ? "Login to your account" : "Create an account"
        }
      />
      <OutlinedButton
        icon={googleIcon}
        text={heading === "login" ? "Login with Google" : "Sign up with Google"}
        type="submmit"
      />
      {heading === "login" ? (
        <p>
          Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </p>
      ) : (
        <p>
          Already have an account? <Link to={ROUTES.LOGIN}>Login</Link>
        </p>
      )}
    </StyledAuthForm>
  );
};

export default AuthForm;
