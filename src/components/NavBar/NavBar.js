import { signOut } from "firebase/auth";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { AuthContext } from "../../services/firebase/auth";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import StyledNavBar, {
  StyledNavContainer,
  StyledNavTabs,
} from "./NavBar.styles";

const NavBar = () => {
  const { auth } = useContext(AuthContext);
  const logoutHandler = () => {
    signOut(auth);
  };

  return (
    <StyledNavContainer>
      <StyledNavBar aria-label="Tab navigation" role="region">
        <Logo />
        <NavTabs />
        <Avatar />
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export const NavTabs = () => {
  return (
    <StyledNavTabs>
      <NavLink to={ROUTES.HOME} aria-label="home">
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
            fill="#5A698F"
          />
        </svg>
      </NavLink>
      <NavLink to={ROUTES.MOVIES} aria-label="movies">
        <svg
          aria-hidden="true"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.0928 0H3.18165C1.50025 0 0.137207 1.36304 0.137207 3.04444V16.9556C0.137207 18.637 1.50025 20 3.18165 20H17.0928C17.9002 20 18.6746 19.6792 19.2455 19.1083C19.8165 18.5374 20.1372 17.763 20.1372 16.9556V3.04444C20.1372 2.23701 19.8165 1.46264 19.2455 0.891697C18.6746 0.320753 17.9002 0 17.0928 0ZM4.13721 9H2.13721V7H4.13721V9ZM4.13721 11H2.13721V13H4.13721V11ZM18.1372 9H16.1372V7H18.1372V9ZM18.1372 11H16.1372V13H18.1372V11ZM18.1372 2.74V4H16.1372V2H17.3972C17.5935 2 17.7817 2.07796 17.9205 2.21674C18.0592 2.35552 18.1372 2.54374 18.1372 2.74ZM4.13721 2H2.87721C2.68095 2 2.49272 2.07796 2.35395 2.21674C2.21517 2.35552 2.13721 2.54374 2.13721 2.74V4H4.13721V2ZM2.13721 17.26V16H4.13721V18H2.87721C2.68095 18 2.49272 17.922 2.35395 17.7833C2.21517 17.6445 2.13721 17.4563 2.13721 17.26ZM17.3972 18C17.8059 18 18.1372 17.6687 18.1372 17.26V16H16.1372V18H17.3972Z"
            fill="#5A698F"
          />
        </svg>
      </NavLink>
      <NavLink to={ROUTES.TV_SERIES} aria-label="tv series">
        <svg
          aria-hidden="true"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.21672 4.48109H20.1367V20H0.136719V4.48109H5.05672L2.35672 1.20272L3.91672 0.029098L7.13672 3.90883L10.3567 0L11.9167 1.20272L9.21672 4.48109ZM2.13672 6.42095V18.0601H12.1367V6.42095H2.13672ZM17.1367 14.1804H15.1367V12.2405H17.1367V14.1804ZM15.1367 10.3007H17.1367V8.36082H15.1367V10.3007Z"
            fill="#5A698F"
          />
        </svg>
      </NavLink>
      <NavLink to={ROUTES.BOOKMARKS} aria-label="bookmarks">
        <svg
          aria-hidden="true"
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5234 0C15.7261 0 15.9199 0.0396563 16.105 0.118969C16.3958 0.233532 16.6271 0.414188 16.799 0.660939C16.9708 0.907689 17.0567 1.18088 17.0567 1.4805V18.5195C17.0567 18.8191 16.9708 19.0923 16.799 19.3391C16.6271 19.5858 16.3958 19.7665 16.105 19.881C15.9376 19.9515 15.7437 19.9868 15.5234 19.9868C15.1004 19.9868 14.7346 19.8458 14.4262 19.5638L8.59673 13.959L2.76725 19.5638C2.45 19.8546 2.08428 20 1.6701 20C1.46741 20 1.27353 19.9603 1.08847 19.881C0.797657 19.7665 0.566329 19.5858 0.394485 19.3391C0.222641 19.0923 0.136719 18.8191 0.136719 18.5195V1.4805C0.136719 1.18088 0.222641 0.907689 0.394485 0.6609390.566329 0.414188 0.797657 0.233532 1.08847 0.118969C1.27353 0.0396563 1.46741 0 1.6701 0H15.5234Z"
            fill="#5A698F"
          />
        </svg>
      </NavLink>
    </StyledNavTabs>
  );
};

export default NavBar;
