import { useState } from "react";
import Alert from "../Alert/Alert";

import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import StyledAuthPage from "./AuthPage.styles";

const AuthPage = ({ heading }) => {
  const [status, setStatus] = useState("");
  const [errMessage, setErrMessage] =  useState("");
  return (
    <StyledAuthPage heading={heading}>
      <Alert type={status} setStatus={setStatus} errMessage={errMessage} />
      <Logo />
      <AuthForm heading={heading} setStatus={setStatus} setErrMessage={setErrMessage}/>
    </StyledAuthPage>
  );
};

export default AuthPage;