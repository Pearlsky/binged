import Icon from "../Icon/Icon";
import { StyledButton, StyledOutlinedButton } from "./Button.styles";

const TextButton = ({ text, type = "" }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};

const OutlinedButton = ({ text = "", icon, type = "" }) => {
  return (
    <StyledOutlinedButton type={type}>
      <Icon icon={icon} />
      {text}
    </StyledOutlinedButton>
  );
};

export { TextButton, OutlinedButton };