import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import StyledAuthPage from "./AuthPage.styles";

const AuthPage = ({ heading }) => {
  return (
    <StyledAuthPage heading={heading}>
      <Logo />
      <AuthForm heading={heading} />
    </StyledAuthPage>
  );
};

export default AuthPage;