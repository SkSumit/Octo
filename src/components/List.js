import React from "react";
import { connect } from "react-redux";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";

import { addSelectedStocks, removeSelectedStocks } from "../redux/stockAction";
import { searchedStocks } from "../redux/userSelectors";
import { setText } from "../redux/filterAction";

class StocksList extends React.Component {
  handleTap = (stock) => {
    if (
      this.props.userStocks.some((element) => element.symbol === stock.symbol)
    ) {
      this.props.remove(stock);
    } else {
      this.props.add(stock);
    }
  };

  componentWillUnmount = () => {
    this.props.removeText("");
  };

  render() {
    return (
      <List>
        {this.props.stocks.map((stock, index) => {
          return (
            <ListItem
              button
              key={index}
              disabled={
                !this.props.userStocks.some(
                  (element) => element.symbol === stock.symbol
                ) && this.props.userStocks.length >= 10
              }
              onClick={() => this.handleTap(stock)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={this.props.userStocks.some(
                    (element) => element.symbol === stock.symbol
                  )}
                  tabIndex={-1}
                />
              </ListItemIcon>
              <ListItemText
                primary={stock.symbol}
                secondary={stock.basevalue.toFixed(2)}
              />
            </ListItem>
          );
        })}
      </List>
    );
  }
}
const mapStateToProps = (state) => ({
  stocks: searchedStocks(state.filters.text, state.stocks),
  userStocks: state.userstocks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    add: (selectedStocks) => {
      dispatch(addSelectedStocks(selectedStocks));
    },
    remove: (selectedStocks) => {
      dispatch(removeSelectedStocks(selectedStocks));
    },
    removeText: (text) => {
      dispatch(setText(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StocksList);
