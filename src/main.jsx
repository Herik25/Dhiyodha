import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./components/register/Register.jsx";
import MobileWebForm from "./components/MobileWebForm/MobileWebForm.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import MobileTest from "./components/mobileTest/MobileTest.jsx";

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
  {
    path: "/mobile-test",
    element: <>
      <MobileTest />
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
