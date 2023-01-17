import styled from "styled-components";
import { breakpoints as breakpoint } from "../style-utils/variables";

export const StyledAppContainer = styled.div`
  @media (${breakpoint.laptop}) {
    display: flex;
    height: ${({ isLoggedIn }) => (isLoggedIn ? "100%" : 0)};
  }
`;