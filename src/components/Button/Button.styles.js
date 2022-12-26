import styled from "styled-components";
import { colors as color, weights as weight } from "../../utils/variables";
import bookmarkIconFull from "../../assets/icon-bookmark-full.svg";
import bookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";

const StyledButton = styled.button`
  font-family: inherit;
  font-weight: inherit;
  background-color: ${color.redprimary};
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

const StyledOutlinedButton = styled(StyledButton)`
  background-color: transparent;
  border: solid 1px ${color.grayishblue};
  display: flex;
  margin-block: 0 1.5em;
  justify-content: center;
  align-items: center;

  div {
    margin-right: 0.7em;
  }
`;

const StyledBookmarkButton = styled.button`
  background: no-repeat
    url(${({ isBookmarked }) => isBookmarked ? bookmarkIconFull : bookmarkIconEmpty});
  background-color: rgba(16, 20, 30, 0.6);
  border: none;
  background-position: center;
  background-size: 12px;
  width: 2.5em;
  height: 2.5em;
  text-indent: 4em;
  white-space: nowrap;
  overflow: hidden;
  padding: 1em;
  border-radius: 50%;
  position: absolute;
  top: 1em;
  right: 1.5em;
`;

const StyledPlayButton = styled.button`
  font-size: 1.15rem;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.2);
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

export {
  StyledButton,
  StyledOutlinedButton,
  StyledBookmarkButton,
  StyledPlayButton,
};
