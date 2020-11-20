import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

import { Card, CardContent, Grid, Box } from "@material-ui/core";
import PortfolioCardList from "./PortfolioCardList";
import { totalChange } from "../redux/userSelectors";

function PortfolioCard(props) {
  return (
    <Box m={2}>
      <Grid container justify="center" direction="column">
        <Grid item>
          <Card>
            <CardContent>
              <Grid container justify="center" direction="column">
                <Grid container item direction="row" justify="space-between">
                  <Grid item>
                    <Typography display="inline" variant="h6" align="left">
                      Arpit Sanghavi
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      align="right"
                      style={{
                        color:
                          totalChange(props.userStocks, props.stocks) > 0
                            ? "green"
                            : "red",
                      }}
                    >
                      {totalChange(props.userStocks, props.stocks).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <PortfolioCardList />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
const mapStateToProps = (state) => {
  return {
    stocks: state.stocks,
    userStocks: state.userstocks,
    state,
  };
};

export default connect(mapStateToProps)(PortfolioCard);
