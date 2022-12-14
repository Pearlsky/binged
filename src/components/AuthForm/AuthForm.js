import { Link } from "react-router-dom";
import { useState } from "react";

import * as ROUTES from "../../constants/routes";

import { TextButton, OutlinedButton } from "../Button/Button";
import TextField from "../TextField/TextField";
import StyledAuthForm from "./AuthForm.styles";

import googleIcon from "../../assets/Google.svg";

const AuthForm = ({ heading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [repeatPasswordErr, setRepeatPasswordErr] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    !email ? setEmailErr(true) : console.log("success");
    !password ? setPasswordErr(true) : console.log("sucess");
    !repeatPassword ? setRepeatPasswordErr(true) : console.log("success");
  };

  return (
    <StyledAuthForm onSubmit={submitHandler}>
      <h1>{heading}</h1>
      <TextField
        type="email"
        placeholder="Email address"
        error={emailErr}
        setInput={setEmail}
      />
      <TextField
        type="password"
        placeholder="Password"
        error={passwordErr}
        setInput={setPassword}
      />
      {heading === "signup" && (
        <TextField
          type="password"
          placeholder="Repeat Password"
          error={repeatPasswordErr}
          setInput={setRepeatPassword}
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
