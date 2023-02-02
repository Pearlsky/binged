import styled from "styled-components";
import { colors as color } from "../../style-utils/variables";
import avatar from "../../assets/avatar.svg";
import {
  breakpoints as breakpoint,
  weights as weight,
} from "../../style-utils/variables";

const StyledAvatar = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: url(${({ avatarImg }) => (avatarImg ? "" : avatar)});
  background-size: cover;
  background-position: center;
  border: solid 1px ${color.white};
  font-family: "Outfit", sans-serif;
  font-weight: ${weight.light};
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 0;
  position: relative;
  z-index: 1;
  text-align: left;

  :hover {
    box-shadow: 0 0 5px 5px #5e6e96;
  }

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

export const StyledAvatarMenu = styled.article`
  background-color: ${color.semidarkblue};
  border: solid 1px ${color.grayishblue};
  border-radius: 20px;
  width: 150px;
  position: absolute;
  top: 150%;
  right: 0;
  @media (${breakpoint.laptop}) {
    left: 150%;
    top: -220%;
  }

  ul {
    display: flex;
    width: 100%;
    border-radius: inherit;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    width: 100%;
  }

  li {
    width: 100%;
    border-bottom: solid 1px ${color.grayishblue};

    :hover {
      background-color: rgba(90, 105, 143, 0.5);
    }
  }

  li:first-of-type {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  li:last-of-type {
    border: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  a {
    display: block;
    padding: 0.7em 1em;
    color: ${color.white};
  }

  button {
    padding: 0.7em 1em;
  }
`;

export default StyledAvatar;
