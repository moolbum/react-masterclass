import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Abount from "../pages/About";
import ErrorComponent from "../pages/ErrorComponent";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import User from "../pages/User";
import Follower from "../pages/User/follower";
import Root from "../Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <Abount />,
      },
      {
        path: "users/:id",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Follower />,
          },
          {
            path: "followeing",
            element: <Follower />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
