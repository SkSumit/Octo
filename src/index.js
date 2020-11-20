import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "./redux/store";

import AppRouter from "./Routers/AppRouters";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@material-ui/core/CssBaseline";

import { startGetStocks } from "./redux/stockAction";

const store = configStore();

ReactDOM.render(<p>Loading</p>, document.getElementById("root"));
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <CssBaseline />
        <Provider store={store}>
          <AppRouter />
        </Provider>
        ,
      </React.StrictMode>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
};

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  // console.log(store.getState().stocks, store.getState().stocks.userstocks);
});

store.dispatch(startGetStocks()).then(() => {
  renderApp();
});

setInterval(() => {
  store.dispatch(startGetStocks());
}, 2000);

reportWebVitals();
