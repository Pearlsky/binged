import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Icon from "../Icon/Icon";
import {
  StyledBookmarkButton,
  StyledLogoutButton,
  StyledOutlinedButton,
  StyledPlayButton,
  StyledPrimaryButton,
} from "./Button.styles";

export const TextButton = ({ text, type = "", isloading }) => {
  return (
    <StyledPrimaryButton type={type}>
      <span>{isloading && <FaSpinner />}</span>
      <span>{text}</span>
    </StyledPrimaryButton>
  );
};

export const OutlinedButton = ({ text = "", icon, type = "" }) => {
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

export const LogoutButton = ({ onClick }) => {
  return (
    <StyledLogoutButton onClick={onClick}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g clip-path="url(#clip0_111_68)">
          <path
            d="M6.42856 5V2.14286C6.42856 1.76398 6.57907 1.40061 6.84698 1.1327C7.11489 0.864795 7.47825 0.714285 7.85713 0.714285L17.8571 0.714285C18.236 0.714285 18.5994 0.864795 18.8673 1.1327C19.1352 1.40061 19.2857 1.76398 19.2857 2.14286L19.2857 17.8571C19.2857 18.236 19.1352 18.5994 18.8673 18.8673C18.5994 19.1352 18.236 19.2857 17.8571 19.2857L7.85713 19.2857C7.47825 19.2857 7.11489 19.1352 6.84698 18.8673C6.57907 18.5994 6.42856 18.236 6.42856 17.8571L6.42856 15"
            stroke="#FC4747"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.7143 10L0.714294 10"
            stroke="#FC4747"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.57141 12.8571L0.714268 10L3.57141 7.14286"
            stroke="#FC4747"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_111_68">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(20 20) rotate(180)"
            />
          </clipPath>
        </defs>
      </svg>
    </StyledLogoutButton>
  );
};
