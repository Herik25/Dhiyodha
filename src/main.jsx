import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./components/register/Register.jsx";
import Navbar from "./navbar/Navbar.jsx";
import MobileWebForm from "./components/MobileWebForm/MobileWebForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <>
      <Navbar />
      <Register />
    </>,
  },
  {
    path: "/mobile-web-form",
    element: <>
      <MobileWebForm />
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
