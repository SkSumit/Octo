import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";
import { setText } from "../redux/filterAction";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    marginBottom: theme.spacing(1),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function CustomizedInputBase(props) {
  const classes = useStyles();

  const onChangeHandler = (e) => {
    props.setText(e.target.value);
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        type="text"
        className={classes.input}
        placeholder="Search Stocks"
        inputProps={{ "aria-label": "Search Stocks" }}
        onChange={onChangeHandler}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
  );
}
const mapDispatchToProps = {
  setText,
};
export default connect(null, mapDispatchToProps)(CustomizedInputBase);
