import styled from "styled-components";

import { colors as color} from "../../utils/variables";

const StyledTextField = styled.label`
  display: block;
  width: 100%;

  & input {
    border: none;
    border-bottom: solid 2px ${color.grayishblue};
    background-color: ${color.darkblue};
    padding: 1em 0.5em;
    width: inherit;

    &::placeholder {
      color: ${color.white};
    }
  }
`;

export default StyledTextField;
