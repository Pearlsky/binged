import styled from "styled-components";
import { colors as color } from "../../utils/variables";

const StyledNavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.5em;
  padding-block: 1em;
  background-color: ${color.semidarkblue};
`;

export const StyledNavTabs = styled.nav`
    flex-basis: 40%;
    display: flex;
    justify-content: space-between;
`;

export default StyledNavBar;