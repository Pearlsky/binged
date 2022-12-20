import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import StyledAuthPage from "./AuthPage.styles";

const AuthPage = ({ heading, setStatus, setErrMessage }) => {
  return (
    <StyledAuthPage heading={heading}>
      <Logo />
      <AuthForm heading={heading} setStatus={setStatus} setErrMessage={setErrMessage}/>
    </StyledAuthPage>
  );
};

export default AuthPage;