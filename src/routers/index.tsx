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
import {
  CHART_PATH,
  COIN_PATH,
  FOLLOWERS_PATH,
  HOME_PATH,
  MAIN_PATH,
  PRICE_PATH,
  TODO_LIST_PATH,
  USER_PATH,
} from "./constants";
import TodoList from "../pages/TodoList";

const router = createBrowserRouter([
  {
    path: MAIN_PATH,
    element: <Root />,
    children: [
      {
        path: HOME_PATH,
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: COIN_PATH,
        element: <Coin />,
      },
      {
        path: `${COIN_PATH}/:id`,
        element: <CoinDetail />,
        children: [
          { path: CHART_PATH, element: <Chart /> },
          { path: PRICE_PATH, element: <Price /> },
        ],
      },
      {
        path: TODO_LIST_PATH,
        element: <TodoList />,
      },
      {
        path: `${USER_PATH}/:id`,
        element: <User />,
        children: [
          {
            path: FOLLOWERS_PATH,
            element: <Follower />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
