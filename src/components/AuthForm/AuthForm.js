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
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "../../services/firebase/auth";
import { DbContext } from "../../services/firebase/db";
import { get, ref, set } from "firebase/database";

const AuthForm = ({ heading, setStatus, setErrMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [repeatPasswordErr, setRepeatPasswordErr] = useState(false);

  const isSignUpValid =
    email !== "" &&
    password !== "" &&
    repeatPassword !== "" &&
    repeatPassword === password;
  const isLoginValid = email !== "" && password !== "";

  const navigate = useNavigate();
  const { auth, setUser } = useContext(AuthContext);
  const db = useContext(DbContext);

  const errorStringify = (string) => string.slice(22, -2).replaceAll("-", " ");
  const createUserAndUserData = (userId, name, email) => {
    const listingsRef = ref(db, "listings");
    const userRef = ref(db, "users/" + userId);

    get(listingsRef).then((snapshot) => {
      const data = snapshot.val();
      set(userRef, {
        username: name,
        email: email,
        userListing: data,
      });
    });
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    currentUser &&
      createUserAndUserData(
        currentUser.uid,
        currentUser.displayName,
        currentUser.email
      );
  });
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
        await signInWithEmailAndPassword(auth, email, password);
        setStatus("success");
        navigate(ROUTES.HOME);
      }
      if (heading === "signup" && isSignUpValid) {
        await createUserWithEmailAndPassword(auth, email, password);
        setStatus("success");
        navigate(ROUTES.HOME);
      }
    } catch (error) {
      setStatus("err");
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
