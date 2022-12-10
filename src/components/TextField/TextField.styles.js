import styled from "styled-components";

import { colors as color } from "../../utils/variables";

const StyledTextField = styled.label`
  display: block;
  width: 100%;
  position: relative;

  ::before {
    display: ${({error}) => error ? "inherit" : "none"};
    content: "Can't be empty";
    color: ${color.redprimary};
    position: absolute;
    top: 2em;
    right: 1em;
  }

  & input {
    border: none;
    border-bottom: solid 1px
      ${({ error }) => (error ? color.redprimary : color.grayishblue)};
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
