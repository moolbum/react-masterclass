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
import TodoList from "../pages/TodoList";
import {
  CHART_PATH,
  COIN_PATH,
  DRAG_AND_DROP_PATH,
  FOLLOWERS_PATH,
  HEADLESS_PATH,
  HOME_PATH,
  MAIN_PATH,
  PRICE_PATH,
  REDUX_SAGA_PATH,
  TODO_LIST_PATH,
  USER_PATH,
} from "./constants";
import DragAndDrop from "../pages/DragAndDrop";
import ReduxSagaStudy from "../pages/ReduxSaga";
import HeadLess from "../pages/Headless";

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
        path: REDUX_SAGA_PATH,
        element: <ReduxSagaStudy />,
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
        path: DRAG_AND_DROP_PATH,
        element: <DragAndDrop />,
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
