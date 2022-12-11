import { useState } from "react";
import StyledTextField from "./TextField.styles";

const TextField = ({ placeholder, type = "text", error, setError }) => {
  const [input, setInput] = useState("");
  const inputError = input === "";

  return (
    <StyledTextField error={error}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          setInput(e.target.value);
          setError(inputError);
        }}
      />
    </StyledTextField>
  );
};

export default TextField;
