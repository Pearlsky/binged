import styled from "styled-components";
import { colors as color } from "../../utils/variables";

const StyledButton = styled.button`
  font-family: inherit;
  font-weight: inherit;
  background-color: ${color.redprimary};
  border: none;
  border-radius: 5px;
  color: ${color.white};
  padding: 1.1em;
  display: block;
  margin-block: 2.5em 1em;
  width: 100%;

  :hover {
    background-color: ${color.white};
    color: ${color.darkblue};
  }

`;

const StyledOutlinedButton = styled(StyledButton)`
  background-color: transparent;
  border: solid 1px ${color.grayishblue};
  display: flex;
  margin-block: 0 1.5em;
  justify-content: center;
  align-items: center;

  div {
    margin-right: .7em;
  }
`;

export { StyledButton, StyledOutlinedButton };