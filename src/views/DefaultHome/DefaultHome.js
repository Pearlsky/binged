import { Link } from "react-router-dom";
import { StyledDefaultHomePage } from "./DefaultHome.styles";
import {
  TextButtonPrimary,
  OutlinedButton,
} from "../../components/Button/Button";
import * as ROUTES from "../../constants/routes";

const DefaultHome = () => {
  return (
    <StyledDefaultHomePage>
      <div>
        <Link to={ROUTES.LOGIN}>
          <TextButtonPrimary text="Login" type="button" />
        </Link>
        <Link to={ROUTES.SIGN_UP}>
          <OutlinedButton text="Sign Up" type="button" />
        </Link>
      </div>
    </StyledDefaultHomePage>
  );
};

export default DefaultHome;
