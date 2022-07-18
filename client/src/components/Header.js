import React from "react";
import { useSelector } from "react-redux";
import { AppBar } from "@mui/material";

import Box from "@mui/material/Box";
import bugTrackerIcon from "../assets/images/bugTrackerIcon.jpeg";

import Logout from "./Logout";

import { getUserSigninData } from "../features/bugsSlice";

const Header = () => {
  const userData = useSelector(getUserSigninData);
  console.log(userData);
  return (
    //set margin on body tag to 0 to prevent AppBar to add margin on screen
    <AppBar position="static">
      <Box
        component="img"
        width="80px"
        marginTop="20px !important"
        margin="0 auto"
        src={bugTrackerIcon}
        marginBottom={window.location.pathname === "/" ? "20px" : "0px"}
      ></Box>

      {userData?.user && (
        <div style={{ marginLeft: "auto" }}>
          <Logout />
        </div>
      )}
    </AppBar>
  );
};

export default Header;
