import errorIcon from "../../assets/error.svg";
import successIcon from "../../assets/success.svg";
import StyledAlert from "./Alert.styles";

const Alert = ({ type, errMessage }) => {
  return (
    <StyledAlert type={type} errMessage={errMessage}>
      <div>
        <img alt="" src={type === "success" ? successIcon : errorIcon} />
        <p>
          {type === "success" ? (
            <span>
              <strong>Success! </strong>User authenticated.
            </span>
          ) : (
            <span>
              <strong>Ooops! </strong>
              {errMessage}.
            </span>
          )}
        </p>
      </div>
    </StyledAlert>
  );
};

export default Alert;
