import StyledAvatar from "./Avatar.styles";

const Avatar = ({ avatarImg }) => {
  return (
    <StyledAvatar avatarImg={avatarImg}>
      {avatarImg && <img src={avatarImg} alt="user avatar" />}
    </StyledAvatar>
  );
};

export default Avatar;
