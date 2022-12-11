import Icon from "../Icon/Icon";
import { StyledButton, StyledOutlinedButton } from "./Button.styles";

const TextButton = ({ text, type = "", onClick}) => {
  return <StyledButton type={type} onClick={onClick}>{text}</StyledButton>;
};

const OutlinedButton = ({ text = "", icon, type = "" }) => {
  return (
    <StyledOutlinedButton type={type} >
      <Icon icon={icon} />
      {text}
    </StyledOutlinedButton> 
  );
};

export { TextButton, OutlinedButton };