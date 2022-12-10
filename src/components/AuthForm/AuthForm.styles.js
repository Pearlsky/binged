import styled from "styled-components";
import { colors as color, weights as weight } from "../../utils/variables";

const StyledAuthForm = styled.form`
  background-color: ${color.semidarkblue};
  border-radius: 10px;
  font-weight: ${weight.light};
  font-family: "Outfit", sans-serif;
  margin-top: 4em;
  margin-inline: 2em;
  width: 90%;
  max-width: 400px;
  padding: 1em 2em 1.5em;

  a {
    color: ${color.redprimary};
    margin-left: 0.5em;
  }

  button {
    font-size: 1rem;
  }

  p {
    text-align: center;
    margin: none;
  } 
`;

export default StyledAuthForm;