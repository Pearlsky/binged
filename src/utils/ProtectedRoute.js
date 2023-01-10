import { Navigate } from "react-router-dom";
import { LOGIN } from "../constants/routes";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to={LOGIN} />;
  }
  return children;
};

export default ProtectedRoute;