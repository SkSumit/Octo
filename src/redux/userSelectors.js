import _ from "lodash";

export const userSelectedStocks = (userStocks, liveStocks) => {
  return liveStocks.filter(function (obj) {
    return userStocks.some(function (obj2) {
      return obj.symbol == obj2.symbol;
    });
  });
};

export const totalChange = (userStocks, liveStocks) => {
  const userSum = _.sumBy(userStocks, (stock) => stock.basevalue);

  const liveUserStock = userSelectedStocks(userStocks, liveStocks);

  const liveUserSum = _.sumBy(liveUserStock, (stock) => stock.basevalue);

  return userSum - liveUserSum;
};

export const percentageChange = (userStocks, liveStocks) => {
  // console.log(userStocks);
  const liveUserStock = userSelectedStocks(userStocks, liveStocks);

  return userStocks.map(
    (stock, index) =>
      ((liveUserStock[index].basevalue - stock.basevalue) / stock.basevalue) *
      100
  );
};

export const searchedStocks = (filters, liveStocks) => {
  return liveStocks.filter((stock) => {
    return stock.symbol.toLowerCase().includes(filters.toLowerCase());
  });
};

export const searchStocks = () => {};
