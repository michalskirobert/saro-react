import React from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import App from "./App";
import "./assets/style/_index.scss";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
