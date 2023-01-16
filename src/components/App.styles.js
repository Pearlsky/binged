import styled from "styled-components";
import { breakpoints as breakpoint } from "../utils/variables";
import homeBg from "../assets/homebg.png";

export const StyledAppContainer = styled.div`
  @media (${breakpoint.laptop}) {
    display: flex;
    height: ${({ isLoggedIn }) => (isLoggedIn ? "100%" : 0)};
  }
`;

export const StyledDefaultHomePage = styled.section`
  background: url(${homeBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
