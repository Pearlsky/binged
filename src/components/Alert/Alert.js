import errorIcon from "../../assets/error.svg";
import successIcon from "../../assets/success.svg";
import StyledAlert from "./Alert.styles";

const Alert = ({ type, errMessage, setStatus }) => {
  return (
    <StyledAlert type={type} errMessage={errMessage}>
      <img alt="" src={type === "success" ? successIcon : errorIcon} />
      <div>
        {type === "success" ? (
          <p>
            <span>Success! </span>
            User authenticated.
          </p>
        ) : (
          <p>
            <span>Ooops! </span>
            {errMessage}.
          </p>
        )}
      </div>
    </StyledAlert>
  );
};

export default Alert;
