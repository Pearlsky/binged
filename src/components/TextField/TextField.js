import StyledTextField from "./TextField.styles";

const TextField = ({
  placeholder,
  type = "text",
  error,
  setInput,
  isVisible,
}) => {
  return (
    <StyledTextField error={error}>
      <input
        type={isVisible ? "text" : type}
        placeholder={placeholder}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </StyledTextField>
  );
};

export default TextField;
