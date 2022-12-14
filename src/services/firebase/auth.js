import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import firebase from "./firebase";

const auth = getAuth(firebase);
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(auth.currentUser);
  return <AuthContext.Provider value={{auth, user, setUser}}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };