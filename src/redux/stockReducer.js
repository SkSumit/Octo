const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_STOCKS":
      return action.stocks;

    default:
      return state;
  }
};
