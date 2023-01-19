import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Icon from "../Icon/Icon";
import {
  StyledBookmarkButton,
  StyledButton,
  StyledIconTextBtnOutlined,
  StyledIconTextButton,
  StyledLogoutButton,
  StyledOutlinedButton,
  StyledPlayButton,
  StyledPrimaryButton,
  StyledShowPassword,
} from "./Button.styles";

export const TextButton = ({ text }) => {
  return (
    <StyledButton>
      <span>{text}</span>
    </StyledButton>
  );
};

export const TextButtonPrimary = ({ text }) => {
  return (
    <StyledPrimaryButton>
      <span>{text}</span>
    </StyledPrimaryButton>
  );
};

export const IconTextButton = ({ text, type = "", isloading }) => {
  return (
    <StyledIconTextButton type={type}>
      <span>{isloading && <FaSpinner />}</span>
      <span>{text}</span>
    </StyledIconTextButton>
  );
};

export const OutlinedButton = ({ text = "", type = "" }) => {
  return <StyledOutlinedButton type={type}>{text}</StyledOutlinedButton>;
};

export const IconTextBtnOutlined = ({ text = "", icon, type = "" }) => {
  return (
    <StyledIconTextBtnOutlined type={type}>
      <Icon icon={icon} />
      {text}
    </StyledIconTextBtnOutlined>
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
    >
      {isBookmarked ? (
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
            fill="#FFF"
          />
        </svg>
      ) : (
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7112 0.771004L10.7215 0.775484L10.7319 0.779653C10.7992 0.806574 10.8386 0.840491 10.8705 0.886924C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5084 13.2407 10.4397 13.2142 10.3685 13.1499L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29753 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.98825 13.2433 0.95547 13.229L0.945175 13.2245L0.93475 13.2203C0.867434 13.1934 0.828051 13.1595 0.796198 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771004Z"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      )}
    </StyledBookmarkButton>
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

export const ShowPasswordBtn = ({ isVisible, setIsVisible }) => {
  const showPasswordHandler = (e) => {
    setIsVisible(!isVisible);
  };
  return (
    <StyledShowPassword>
      <button type="button" onClick={showPasswordHandler}>{isVisible ? "Hide password" : "Show password"}</button>
    </StyledShowPassword>
  );
};
