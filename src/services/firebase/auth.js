import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { createContext, useState } from "react";
import firebaseApp from "./firebase";

const auth = getAuth(firebaseApp);

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(sessionStorage.getItem("authUser"))
  );
  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ auth, isLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const GProvider = new GoogleAuthProvider();

export { AuthContext, AuthProvider, GProvider};
