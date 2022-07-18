import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import bugTrackerIcon from "../assets/images/bugTrackerIcon.jpeg";
import { Grid } from "@mui/material";
import Logout from "./Logout";
import DashboardButtons from "./DashboardButtons";

const Header = () => {
  return (
    //set margin on body tag to 0 to prevent AppBar to add margin on screen
    <AppBar position="static">
      <Box
        component="img"
        width="80px"
        marginTop="20px !important"
        margin="0 auto"
        src={bugTrackerIcon}
      ></Box>

      <div style={{ marginLeft: "auto" }}>
        <Logout />
      </div>
    </AppBar>
  );
};

export default Header;
