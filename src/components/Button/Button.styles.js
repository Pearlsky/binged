import styled, { keyframes } from "styled-components";
import { colors as color, weights as weight } from "../../style-utils/variables";

export const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledButton = styled.button`
  font-family: inherit;
  font-weight: inherit;
  border: none;
  border-radius: 5px;
  color: ${color.white};
  padding: 1.1em;
  display: block;
  margin-block: 2.5em 1em;
  width: 100%;

  :hover {
    background-color: ${color.white};
    color: ${color.darkblue};
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${color.redprimary};
`;

export const StyledOutlinedButton = styled(StyledButton)`
  background-color: transparent;
  border: solid 1px ${color.grayishblue};
  margin-block: 1em;

  hover {
    color: ${color.white};
  }
`;

export const StyledIconTextButton = styled(StyledPrimaryButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: 1s linear infinite ${spin};
  }

  span {
    margin-left: 0.5em;
  }
`;

export const StyledIconTextBtnOutlined = styled(StyledOutlinedButton)`
  display: flex;
  margin-block: 0 1.5em;
  justify-content: center;
  align-items: center;

  div {
    margin-right: 0.7em;
  }
`;

export const StyledBookmarkButton = styled.button`
  background-color: rgba(16, 20, 30, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  position: absolute;
  top: 1em;
  right: 1.5em;

  :hover {
    background-color: ${color.white};
  }

  :hover path {
    stroke: #000;
    fill: ${color.white};
  }
`;

export const StyledPlayButton = styled.button`
  font-size: 1.15rem;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  border: none;
  color: ${color.white};
  padding-block: 0.7em;
  padding-inline: 0.7em;
  display: none;
  justify-content: space-between;
  align-items: center;
  font-weight: ${weight.medium};
  font-family: "Outfit", sans-serif;

  svg,
  span {
    margin-right: 1.1em;
  }
`;

export const StyledLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  margin-block: 2em;
  cursor: pointer;
`;
