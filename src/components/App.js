import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../services/firebase/auth";

import GlobalStyles from "../utils/Global.styles";
import * as ROUTES from "../constants/routes";

import Login from "../views/Login/Login";
import Signup from "../views/Signup/Signup";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        {user !== "" && (
          <>
            <Route path={ROUTES.HOME} />
            <Route path={ROUTES.MOVIES} />
            <Route path={ROUTES.TV_SERIES} />
            <Route path={ROUTES.BOOKMARKS} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
