import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import bugTrackerIcon from "../assets/images/bugTrackerIcon.jpeg";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    //set margin on body tag to 0 to prevent AppBar to add margin on screen
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          justifyContent={"center"}
          style={{ paddingBottom: "10px" }}
          maxWidth="100%"
        >
          <Box
            component="img"
            width="80px"
            marginTop="10px"
            marginBottom="1Opx"
            src={bugTrackerIcon}
          ></Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
