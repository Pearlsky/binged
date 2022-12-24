import { createGlobalStyle } from "styled-components";
import { colors as color, weights as weight } from "./variables";

const GlobalStyles = createGlobalStyle`
  :root {
    box-sizing: border-box;
    font-size: 0.93em;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  #root {
    height: 100%;
  }

  body {
    margin: 0;
    background-color: ${color.darkblue};
    color: ${color.white};
    height: 100vh;
    font-family: "Outfit", sans-serif;
    font-weight: ${weight.light};
  }

  h1 {
    font-size: 2rem;
    font-weight: ${weight.light};
    text-transform: capitalize;
  }
  
 h2,h3,h4,h5 {
    font-weight: ${weight.medium};
  }
  
  ul {
    padding-left: 0;
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
