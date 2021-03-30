import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorker from "./store/config/serviceWorker";
import { store } from "./store";
import CustomCookies from "./components/shared/CustomCookies";

import "./assets/style/_index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <CustomCookies />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
