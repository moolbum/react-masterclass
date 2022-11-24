import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Abount from "../pages/About";
import Home from "../pages/Home";
import Root from "../Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <Abount />,
      },
    ],
  },
]);

export default router;
