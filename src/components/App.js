import { Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../services/firebase/auth";

import GlobalStyles from "../utils/Global.styles";
import { StyledAppContainer } from "./App.styles";
import * as ROUTES from "../constants/routes";

import Alert from "./Alert/Alert";
import AuthPage from "../views/AuthPage/AuthPage";
import Home from "../views/Home/Home";
import ProtectedRoute from "../utils/ProtectedRoute";

import NavBar from "./NavBar/NavBar";
import Movies from "../views/Movies/Movies";
import TVSeries from "../views/TVSeries/TVSeries";
import Bookmarks from "../views/Bookmarks/Bookmarks";

function App() {
  const [status, setStatus] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <GlobalStyles />
      <Alert type={status} errMessage={errMessage} />
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
      </Routes>

      <StyledAppContainer>
        {isLoggedIn && <NavBar />}
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.MOVIES}
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.TV_SERIES}
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <TVSeries />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.BOOKMARKS}
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Bookmarks />
              </ProtectedRoute>
            }
          />
        </Routes>
      </StyledAppContainer>
    </>
  );
}

export default App;