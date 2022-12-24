import styled from "styled-components";
import { breakpoints as breakpoint } from "../utils/variables";

export const StyledAppContainer = styled.div`
  @media (${breakpoint.laptop}) {
    display: flex;
    height: 100%;
  }
`;