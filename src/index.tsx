import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { AxiosError } from "axios";
import { RecoilRoot } from "recoil";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./store";
import createSagaMiddleware from "redux-saga";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => console.log("error>>>>", error as AxiosError),
    },
  },
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware // 사가 미들웨어를 적용하고
    )
  )
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </RecoilRoot>
    </Provider>
  </React.StrictMode>
);
