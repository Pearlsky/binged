import errorIcon from "../../assets/error.svg";
import successIcon from "../../assets/success.svg";
import StyledAlert from "./Alert.styles";

const Alert = ({ type, errMessage }) => {
  return (
    <StyledAlert type={type} errMessage={errMessage}>
      <div role="alert" aria-live="polite">
        {type && (
          <>
            <img alt="" src={type === "success" ? successIcon : errorIcon} />
            <p>
              {type === "success" ? (
                <span>
                  <strong>Success! </strong><small>user authenticated</small>
                </span>
              ) : (
                <span>
                  <strong>Ooops! </strong>
                  <small>{errMessage}</small>
                </span>
              )}
            </p>
          </>
        )}
      </div>
    </StyledAlert>
  );
};

export default Alert;