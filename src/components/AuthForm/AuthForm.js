import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import Button from "../Button/Button";
import TextField from "../TextField/TextField";

const AuthForm = ({ heading }) => {
  return (
    <form>
      <h1>{heading}</h1>
      <TextField type="email" placeholder="Email address" />
      <TextField type="password" placeholder="Password" />
      <Button
        type="submit"
        text={
          heading === "login" ? "Login to your account" : "Create an account"
        }
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
    </form>
  );
};

export default AuthForm;
