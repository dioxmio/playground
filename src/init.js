import Student from "./modules/student.js";
import App from "./app.jsx";
import Counter from "./views/counter.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore.js"

var store = configureStore();

ReactDOM.render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
);
