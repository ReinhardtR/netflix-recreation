import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import GlobalStyles from "./global-styles";
import App from "./app";
import { firebase } from "./firebase/config";
import { FirebaseContext } from "./firebase/context";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
