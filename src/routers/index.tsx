import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Coin from "../pages/Coin";
import CoinDetail from "../pages/CoinDetail";
import Chart from "../pages/Chart";
import Price from "../pages/Price";
import NotFound from "../pages/NotFound";
import Root from "../Root";
import TodoList from "../pages/TodoList";
import HeadLess from "../pages/Headless";
import Tabs from "../pages/Tabs";
import PATH from "../components/constant/path";
import WebPush from "../pages/WebPush";

const routers = createBrowserRouter([
  {
    path: PATH.MAIN_PATH,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: PATH.COIN_PATH,
        element: <Coin />,
      },
      {
        path: `${PATH.COIN_PATH}/:id`,
        element: <CoinDetail />,
        children: [
          { path: PATH.CHART_PATH, element: <Chart /> },
          { path: PATH.PRICE_PATH, element: <Price /> },
        ],
      },
      {
        path: PATH.HEADLESS_PATH,
        element: <HeadLess />,
      },
      {
        path: PATH.TODO_LIST_PATH,
        element: <TodoList />,
      },
      {
        path: PATH.TABS_PATH,
        element: <Tabs />,
      },
      {
        path: PATH.WEB_PUSH_PATH,
        element: <WebPush />,
      },
    ],
  },
]);

export default routers;
