import StyledTextField from "./TextField.styles";

const TextField = ({ placeholder, type = "text", error, setInput}) => {

  return (
    <StyledTextField error={error}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </StyledTextField>
  );
};

export default TextField;
