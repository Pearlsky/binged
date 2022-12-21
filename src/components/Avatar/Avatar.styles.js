import styled from "styled-components";
import { colors as color } from "../../utils/variables";

const StyledAvatar = styled.article`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ avatarImg }) =>
    avatarImg ? "transparent" : "yellow"};
  border: solid 2px ${color.white};

  img {
    max-width: 100%;
    border-radius: 50%;
  }
`;

export default StyledAvatar;