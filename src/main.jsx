import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import About from "./About.jsx";
import NavBar from "./NavBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
