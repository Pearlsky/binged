import styled from "styled-components";
import {
  colors as color,
  weights as weight
} from "../../style-utils/variables";

const StyledSearchbar = styled.article`
  label {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  svg {
    min-width: 30px;
    min-height: 20px;
    margin-right: .7em;
  }

  input {
    margin: 0;
    flex-basis: 100%;
    background-color: ${color.darkblue};
    font-size: 1.3rem;
    font-family: "Outfit", sans-serif;
    font-weight: ${weight.light};
    color: ${color.white};
    border: none;
    padding-block: 0.9em;
    outline: none;
    caret-color: ${color.redprimary};

    ::placeholder {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.6);
    }

    :active,
    :focus {
      border-bottom: 1px solid ${color.grayishblue};
    }
  }
`;

export default StyledSearchbar;