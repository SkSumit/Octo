import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { percentageChange, userSelectedStocks } from "../redux/userSelectors";
function PortfolioCardList(props) {
  return (
    <div>
      <List>
        {props.userStocks.map((stock, index) => {
          return (
            <ListItem button key={index}>
              <ListItemText
                primary={stock.symbol}
                secondary={`Buy Value: ${stock.basevalue.toFixed(2)}`}
              />

              <ListItemText
                style={{
                  color:
                    percentageChange(props.userStocks, props.stocks)[index] > 0
                      ? "green"
                      : "red",
                }}
                primary={`${userSelectedStocks(props.userStocks, props.stocks)[
                  index
                ].basevalue.toFixed(2)} 
                (${percentageChange(props.userStocks, props.stocks)[
                  index
                ].toFixed(2)} %)`}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks,
    userStocks: state.userstocks,
  };
};

export default connect(mapStateToProps)(PortfolioCardList);
