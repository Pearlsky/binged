import AuthForm from "../../components/AuthForm/AuthForm";
import StyledLogin from "./Login.styles";

const Login = () => {
  return (
    <StyledLogin>
      <AuthForm heading="login" />
    </StyledLogin>
  );
};

export default Login;
