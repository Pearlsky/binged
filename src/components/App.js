import { Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../services/firebase/auth";

import GlobalStyles from "../utils/Global.styles";
import * as ROUTES from "../constants/routes";

import Alert from "./Alert/Alert";
import AuthPage from "../views/AuthPage/AuthPage";

function App() {
  const { user } = useContext(AuthContext);
  const [status, setStatus] = useState("");
  const [errMessage, setErrMessage] = useState("");
  return (
    <>
      <GlobalStyles />
      <Alert type={status} errMessage={errMessage}/>
      <Routes>
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <AuthPage
              heading="signup"
              setStatus={setStatus}
              setErrMessage={setErrMessage}
            />
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <AuthPage
              heading="login"
              setStatus={setStatus}
              setErrMessage={setErrMessage}
            />
          }
        />
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
