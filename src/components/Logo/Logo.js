import logo from "../../assets/logo.svg";
import StyledLogo from "./Logo.styles";

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt="binged-logo" />{" "}
    </StyledLogo>
  );
};

export default Logo;
