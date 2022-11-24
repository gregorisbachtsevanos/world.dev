import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import { store } from "./store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
    </React.StrictMode>
);
