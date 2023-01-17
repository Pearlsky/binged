import styled from "styled-components";
import { breakpoints as breakpoint } from "../../style-utils/variables";

const StyledMoviesView = styled.section`
  width: 100%;
  overflow: hidden scroll;
  padding-inline: 1em;
  padding-block: 1em 1.5em;
  @media (${breakpoint.laptop}) {
    margin: 2em;
  }
`;

export default StyledMoviesView;
