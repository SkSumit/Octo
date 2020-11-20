import React from "react";
import { connect } from "react-redux";
import { startGetStocks } from "../redux/stockAction";
import List from "./List";
import Typography from "@material-ui/core/Typography";
import { Container, Box } from "@material-ui/core";
import SearchBar from "./SearchBar";
import { setText } from "../redux/filterAction";
class AddStockPage extends React.Component {
  componentDidMount() {
    this.props.setText("");
  }
  render() {
    return (
      <Container maxWidth="sm">
        <Box m={2}>
          <SearchBar />
          <Typography variant="h6">
            Select upto 10 stocks to create a portfolio.
          </Typography>
        </Box>
        <List />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isReady: state.stocks.data,
});

const mapDispatchToProps = {
  startGetStocks,
  setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStockPage);
