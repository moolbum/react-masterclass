import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Coin from "../pages/Coin";
import CoinDetail from "../pages/CoinDetail";
import Chart from "../pages/Chart";
import Price from "../pages/Price";
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
        path: "coin",
        element: <Coin />,
      },
      {
        path: "coin/:id",
        element: <CoinDetail />,
        children: [
          { path: "chart", element: <Chart /> },
          { path: "price", element: <Price /> },
        ],
      },
      {
        path: "users/:id",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Follower />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
