import styled from "styled-components";
import { colors as color } from "../../utils/variables";
import { breakpoints as breakpoint } from "../../utils/variables";

const StyledAvatar = styled.article`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ avatarImg }) =>
    avatarImg ? "transparent" : color.grayishblue};
  border: solid 1px ${color.white};

  img {
    max-width: 100%;
    border-radius: 50%;
  }

  @media (${breakpoint.laptop}) {
    margin-top: auto;
    width: 40px;
    height: 40px;
  }
`;

export default StyledAvatar;
