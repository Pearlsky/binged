import styled from "styled-components";
import {
  weights as weight,
  breakpoints as breakpoint,
} from "../../utils/variables";

const StyledHomeView = styled.section`
  width: 100%;
  overflow: hidden scroll;
  padding-inline: 1em;
  padding-block: 1em 1.5em;
  @media (${breakpoint.laptop}) {
    margin: 2em;
  }
`;

export const StyledRegularSection = styled.section`
  width: 100%;
  h2 {
    font-weight: ${weight.light};
    font-size: 1.5rem;
    margin-block: 1.2em;
    @media (${breakpoint.laptop}) {
        font-size: 1.6rem;
    }
  }
`;

export const StyledListingGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 12rem;
  gap: 1.3em;

  @media (min-width: 38em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (${breakpoint.tablet}) {
    grid-auto-rows: 14rem;
    gap: 1.5em;
  }

  @media (${breakpoint.laptop}) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 20rem;
    gap: .5em 2em;
  }
`;

export default StyledHomeView;
