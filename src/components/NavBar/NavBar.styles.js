import styled from "styled-components";
import { colors as color } from "../../utils/variables";
import { breakpoints as breakpoint } from "../../utils/variables";

export const StyledNavContainer = styled.div`
  @media (${breakpoint.mobile}) {
    margin-block: 1.5em;
    margin-inline: 1.5em;
  }
`;

const StyledNavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.5em;
  padding-block: 1em;
  background-color: ${color.semidarkblue};

  @media (${breakpoint.mobile}) {
    border-radius: 20px;
  }

  @media (${breakpoint.laptop}) {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    padding-block: 1.5em;
  }
`;

export const StyledNavTabs = styled.nav`
  flex-basis: 40%;
  max-width: 200px;
  display: flex;
  justify-content: space-between;

  @media (${breakpoint.laptop}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex-basis: 35%;
    padding-top: 2em;
  }

  a.active path {
    fill: ${color.white};
  }
`;
export default StyledNavBar;
