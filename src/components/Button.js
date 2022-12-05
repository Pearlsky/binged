import styled from "styled-components";

const StyledButton = styled.button`
  background-color: rgb(252, 71, 71);
  border: none;
  border-radius: 15px;
  color: rgb(255, 255, 255);
  padding: 1.5em;
  width: 100%;
`;

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;