import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import { TextButton, OutlinedButton } from "../Button/Button";
import TextField from "../TextField/TextField";
import StyledAuthForm from "./AuthForm.styles";

import googleIcon from "../../assets/Google.svg";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "../../services/firebase/auth";

const AuthForm = ({ heading, setStatus, setErrMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [repeatPasswordErr, setRepeatPasswordErr] = useState(false);

  const { auth, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const isSignUpValid =
    email !== "" && password !== "" && repeatPassword !== "";
  const isLoginValid = email !== "" && password !== "";

  const submitHandler = async (e) => {
    setStatus("");

    try {
      e.preventDefault();
      !email ? setEmailErr(true) : setEmailErr(false);
      !password ? setPasswordErr(true) : setPasswordErr(false);
      !repeatPassword
        ? setRepeatPasswordErr(true)
        : setRepeatPasswordErr(false);

      if (heading === "login" && isLoginValid) {
        const newUser = await signInWithEmailAndPassword(auth, email, password);
        setUser(newUser?.user);
        setStatus("success");
        navigate(ROUTES.HOME);
      }
      if (heading === "signup" && isSignUpValid) {
        const newUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(newUser?.user);
        setStatus("success");
        navigate(ROUTES.HOME);
      }
    } catch (error) {
      setStatus("err");
      setErrMessage(error.message);
    }
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
        type="button"
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
