import React from "react";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import SuperAdminAuthReducer from "./reducers/superAdmin/SuperAdminAuthSlice";
import vendorAuthSlice from "./reducers/vendor/VendorAuthSlice";
const store = configureStore({
  reducer: {
    superAdminAuth: SuperAdminAuthReducer.reducer,
    vendorAuth: vendorAuthSlice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
