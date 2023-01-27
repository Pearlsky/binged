import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../services/firebase/auth";
import { signOut } from "firebase/auth";
import { LogoutButton } from "../Button/Button";
import StyledAvatar, { StyledAvatarMenu } from "./Avatar.styles";

const Avatar = ({ avatarImg }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const avatarMenuToggle = (e) => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <StyledAvatar avatarImg={avatarImg} onClick={avatarMenuToggle}>
      {avatarImg && <img src={avatarImg} alt="user avatar" />}
      {menuIsOpen && <AvatarMenu />}
    </StyledAvatar>
  );
};

export const AvatarMenu = () => {
  const { auth } = useContext(AuthContext);
  const logoutHandler = () => {
    signOut(auth);
  };
  return (
    <StyledAvatarMenu>
      <ul>
        <li key="item-1">
          <Link to="/profile">View Profile</Link>
        </li>
        <li key="item-2">
          <Link to="/settings">Settings</Link>
        </li>
        <li key="item-3">
          <LogoutButton onClick={logoutHandler} />
        </li>
      </ul>
    </StyledAvatarMenu>
  );
};

export default Avatar;
