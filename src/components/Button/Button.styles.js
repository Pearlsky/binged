import styled from "styled-components";
import { colors as color } from "../../utils/variables";

const StyledButton = styled.button`
  background-color: ${color.redprimary};
  border: none;
  border-radius: 10px;
  color: ${color.white};
  padding: 1.5em;
  width: 100%;
`;

export default StyledButton;