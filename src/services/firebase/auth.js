import { getAuth } from "firebase/auth";
import { createContext} from "react";
import firebase from "./firebase";

const auth = getAuth(firebase);

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthProvider };