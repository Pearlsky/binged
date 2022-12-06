import StyledTextField from "./TextField.styles";

const TextField = ({ placeholder, type = "text" }) => {
  return (
    <StyledTextField>
      <input type={type} placeholder={placeholder} />
    </StyledTextField>
  );
};

export default TextField;