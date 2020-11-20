const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USERSTOCKS":
      return action.stocks;
    case "ADD_SELECTED_USERSTOCKS":
      return [...state, action.stocks];
    case "REMOVE_SELECTED_USERSTOCKS":
      return state.filter((item) => item.symbol !== action.stocks.symbol);

    default:
      return state;
  }
};
