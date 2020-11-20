import axios from "axios";

export const startGetStocks = () => {
  return async (dispatch) => {
    try {
      const stocks = await axios.get(
        "https://us-central1-stock-fantasy-fd46e.cloudfunctions.net/helloWorld"
      );

      // console.log(stocks.data);
      return dispatch(getStocks(stocks.data));
    } catch (error) {
      throw error;
    }
  };
};

export const getStocks = (stocks) => {
  return {
    type: "GET_ALL_STOCKS",
    stocks: stocks,
  };
};

export const addSelectedStocks = (stocks) => {
  return {
    type: "ADD_SELECTED_USERSTOCKS",
    stocks: stocks,
  };
};

export const removeSelectedStocks = (stocks) => {
  return {
    type: "REMOVE_SELECTED_USERSTOCKS",
    stocks: stocks,
  };
};
