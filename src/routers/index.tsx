import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Coin from "../pages/Coin";
import CoinDetail from "../pages/CoinDetail";
import Chart from "../pages/Chart";
import Price from "../pages/Price";
import NotFound from "../pages/NotFound";
import Root from "../Root";
import TodoList from "../pages/TodoList";
import {
  CHART_PATH,
  COIN_PATH,
  DRAG_AND_DROP_PATH,
  HEADLESS_PATH,
  MAIN_PATH,
  PRICE_PATH,
  TABS_PATH,
  TODO_LIST_PATH,
} from "./constants";
import DragAndDrop from "../pages/DragAndDrop";
import HeadLess from "../pages/Headless";
import Tabs from "../pages/Tabs";

const routers = createBrowserRouter([
  {
    path: MAIN_PATH,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
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
        path: HEADLESS_PATH,
        element: <HeadLess />,
      },
      {
        path: TODO_LIST_PATH,
        element: <TodoList />,
      },
      {
        path: TABS_PATH,
        element: <Tabs />,
      },
      {
        path: DRAG_AND_DROP_PATH,
        element: <DragAndDrop />,
      },
    ],
  },
]);

export default routers;
