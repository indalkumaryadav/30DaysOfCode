import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>TooLbar</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
