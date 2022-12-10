import StyledTextField from "./TextField.styles";

const TextField = ({ placeholder, type = "text", error}) => {
  return (
    <StyledTextField error={error}>
      <input type={type} placeholder={placeholder} error={error} />
    </StyledTextField>
  );
};

export default TextField;