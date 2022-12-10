import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import { TextButton, OutlinedButton } from "../Button/Button";
import TextField from "../TextField/TextField";
import StyledAuthForm from "./AuthForm.styles";

import googleIcon from "../../assets/Google.svg";

const AuthForm = ({ heading }) => {
  return (
    <StyledAuthForm>
      <h1>{heading}</h1>
      <TextField type="email" placeholder="Email address" />
      <TextField type="password" placeholder="Password" error/>
      {heading === "login" ? (
        ""
      ) : (
        <TextField type="password" placeholder="Repeat Password" />
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
