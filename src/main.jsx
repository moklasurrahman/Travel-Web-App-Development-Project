import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import "./index.css";
import { FilterProvider } from "./context/FilterContext.jsx";
import { Provider } from 'react-redux'
import { store } from "./redux/store.jsx";
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <FilterProvider>
      <ToastContainer position="top-right" closeButton={false}/>
        <App />
      </FilterProvider>
    </Provider>
  </React.StrictMode>
);
