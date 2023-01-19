import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import * as ROUTES from "../../constants/routes";

import {
  IconTextButton,
  IconTextBtnOutlined,
  ShowPasswordBtn,
} from "../Button/Button";
import TextField from "../TextField/TextField";
import StyledAuthForm from "./AuthForm.styles";

import googleIcon from "../../assets/Google.svg";
import { AuthContext } from "../../services/firebase/auth";

const AuthForm = ({ heading, setStatus, setErrMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [repeatPasswordErr, setRepeatPasswordErr] = useState(false);

  const [passIsVisible, setPassIsVisible] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  const isSignUpValid =
    email !== "" &&
    password !== "" &&
    repeatPassword !== "" &&
    repeatPassword === password;
  const isLoginValid = email !== "" && password !== "";

  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const errorStringify = (string) => string.slice(22, -2).replaceAll("-", " ");

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
