import styled from "styled-components";
import { colors as color } from "../../utils/variables";
import { breakpoints as breakpoint } from "../../utils/variables";

export const StyledNavContainer = styled.div`
  @media (${breakpoint.mobile}) {
    margin-block: 1.5em 0;
    margin-inline: 1.5em;
  }

  @media (${breakpoint.laptop}) {
    margin-inline: 1.5em 0;
    margin-block: 1.5em;
  }
`;

const StyledNavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1em;
  padding-block: 1em;
  background-color: ${color.semidarkblue};

  @media (${breakpoint.mobile}) {
    border-radius: 20px;
  }

  @media (${breakpoint.laptop}) {
    padding-inline: 2em;
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
  min-width: 150px;
  display: flex;
  justify-content: space-between;

  @media (${breakpoint.laptop}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex-basis: 35%;
    min-width: 0;
    padding-top: 2em;
  }

  a:hover path {
    fill: ${color.redprimary};
  }

  a.active path {
    fill: ${color.white};
  }
`;
export default StyledNavBar;
