import {Routes, Route} from "react-router-dom";

import GlobalStyles from '../utils/Global.styles';
import * as ROUTES from "../constants/routes";

import Login from "../views/Login/Login";
import Signup from "../views/Signup/Signup";

function App() {
  return (
    <>
    <GlobalStyles/>

    <Routes>
      <Route path={ROUTES.SIGN_UP} element={<Signup/>}/>
      <Route path={ROUTES.LOGIN} element={<Login/>}/>
      {/* <Route path={ROUTES.HOME}/>
      <Route path={ROUTES.MOVIES}/>
      <Route path={ROUTES.TV_SERIES}/>
      <Route path={ROUTES.BOOKMARKS}/> */}
    </Routes>
    </>
  );
}

export default App;
