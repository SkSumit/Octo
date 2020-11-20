import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link
            to={process.env.PUBLIC_URL + "/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            PortFOLIO-XR
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
