import errorIcon from "../../assets/error.svg";
import successIcon from "../../assets/success.svg";
import StyledAlert from "./Alert.styles";

const Alert = ({type, message = "Failed to authenticate user"}) => {
  return (
    <StyledAlert type={type}>
      <img alt="" src={type === "err" ? errorIcon : successIcon} />
      <div>
        <h3>Could not authenticate user</h3>
        <p>{message}</p>
      </div>
    </StyledAlert>
  );
};

export default Alert;