import Icon from "../Icon/Icon";
import { StyledButton, StyledOutlinedButton } from "./Button.styles";

const TextButton = ({ text, type = "", onClick}) => {
  return <StyledButton type={type} onClick={onClick}>{text}</StyledButton>;
};

const OutlinedButton = ({ text = "", icon, type = "", onClick }) => {
  return (
    <StyledOutlinedButton type={type} onClick={onClick}>
      <Icon icon={icon} />
      {text}
    </StyledOutlinedButton> 
  );
};

export { TextButton, OutlinedButton };