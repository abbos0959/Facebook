import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/icons/icons.css";

import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <Router>
            <App />
         </Router>
      </Provider>
   </React.StrictMode>
);
