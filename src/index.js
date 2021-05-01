import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";

import App from "./App";
import { store } from "./store";
import CustomCookies from "./components/shared/CustomCookies";

import * as serviceWorker from "./store/config/serviceWorker";

import "./assets/style/_index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
      <CustomCookies />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
