import StyledButton from "./Button.styles";

const Button = ({ text, type = "" }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};

export default Button;
