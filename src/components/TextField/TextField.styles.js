import styled from "styled-components";

import { colors as color } from "../../utils/variables";

const StyledTextField = styled.label`
  display: block;
  width: 100%;

  & input {
    border: none;
    border-bottom: solid 1px ${color.grayishblue};
    background-color: ${color.semidarkblue};
    color: ${color.white};
    padding: 2em 1em 1.4em;
    width: inherit;
    font-family: inherit;
    font-weight: inherit;
    outline: none;

    :focus {
      border-color: ${color.white};
    }

    ::placeholder {
      color: ${color.gray};
    }
  }
`;

export default StyledTextField;
