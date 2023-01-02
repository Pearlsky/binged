import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./services/firebase/auth";
import { BrowserRouter as Router } from "react-router-dom";
import { DbProvider } from "./services/firebase/db";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <DbProvider>
      <Router>
        <App />
      </Router>
    </DbProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
