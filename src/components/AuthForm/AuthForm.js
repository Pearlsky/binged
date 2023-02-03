import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { GProvider } from "../../services/firebase/auth";
import * as ROUTES from "../../constants/routes";
import { AuthContext } from "../../services/firebase/auth";
import { errorStringify } from "../../utils/utilfns";

import {
  IconTextButton,
  IconTextBtnOutlined,
  ShowPasswordBtn,
} from "../Button/Button";
import TextField from "../TextField/TextField";
import StyledAuthForm from "./AuthForm.styles";
import googleIcon from "../../assets/Google.svg";

const AuthForm = ({ heading, setStatus, setErrMessage }) => {
  // State:

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [repeatPasswordErr, setRepeatPasswordErr] = useState(false);
  const [passIsVisible, setPassIsVisible] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  // Context & Router Values:

  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  // Derived State:

  // boolean: if all or any of the signup fields is empty or not
  const isSignUpValid =
    email !== "" &&
    password !== "" &&
    repeatPassword !== "" &&
    repeatPassword === password;

  // boolean: if all or any of the login fields is empty or not
  const isLoginValid = email !== "" && password !== "";

  // Helper Functions / Handlers:

  // set firebase auth persistence to match session storage persistence
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(`${error.code}: ${error.message}`);
    });

  // signup/login with password and email on auth form submit
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
        setAuthLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        setStatus("success");
        setAuthLoading(false);
        navigate(ROUTES.HOME);
      }
      if (heading === "signup" && isSignUpValid) {
        setAuthLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        setStatus("success");
        setAuthLoading(false);
        navigate(ROUTES.HOME);
      }
    } catch (error) {
      setStatus("err");
      setAuthLoading(false);
      setErrMessage(errorStringify(error.message));
    }
  };

  // auth w google social authentication
  const signInWGoogleHandler = async (e) => {
    setStatus("");

    try {
      await signInWithPopup(auth, GProvider);
      setStatus("success");
      navigate(ROUTES.HOME);
    } catch (error) {
      setStatus("err");
    }
  };

  // UI:
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
        isVisible={passIsVisible}
      />
      {heading === "signup" && (
        <TextField
          type="password"
          placeholder="Repeat Password"
          error={repeatPasswordErr}
          setInput={setRepeatPassword}
          isVisible={passIsVisible}
        />
      )}
      {password && (
        <ShowPasswordBtn
          isVisible={passIsVisible}
          setIsVisible={setPassIsVisible}
        />
      )}
      <IconTextButton
        type="submit"
        text={
          heading === "login" ? "Login to your account" : "Create an account"
        }
        isloading={authLoading}
      />
      <IconTextBtnOutlined
        icon={googleIcon}
        text={heading === "login" ? "Login with Google" : "Sign up with Google"}
        type="button"
        onClick={signInWGoogleHandler}
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
