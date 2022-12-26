import { useState } from "react";
import Icon from "../Icon/Icon";
import { StyledBookmarkButton, StyledButton, StyledOutlinedButton, StyledPlayButton } from "./Button.styles";

const TextButton = ({ text, type = "" }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};

const OutlinedButton = ({ text = "", icon, type = "" }) => {
  return (
    <StyledOutlinedButton type={type}>
      <Icon icon={icon} />
      {text}
    </StyledOutlinedButton>
  );
};

export const BookmarkButton = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const bookmarkHandler = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <StyledBookmarkButton
      isBookmarked={isBookmarked}
      onClick={() => bookmarkHandler()}
    />
  );
};

export const PlayButton = () => {
  return (
    <StyledPlayButton aria-labelledby="playBtn ">
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
          fill="#FFF"
        />
      </svg>
      <span id="playBtn">Play</span>
    </StyledPlayButton>
  );
};

export { TextButton, OutlinedButton };