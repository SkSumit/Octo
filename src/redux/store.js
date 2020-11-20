import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import stocksReducer from "./stockReducer";
import userstocksReducer from "./userStockReducer";
import filtersReducer from "./filterReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : [];

export default () => {
  const store = createStore(
    combineReducers({
      stocks: stocksReducer,
      filters: filtersReducer,
      userstocks: userstocksReducer,
    }),
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
