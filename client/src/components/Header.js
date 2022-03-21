import React from "react";
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box'
import bugTrackerIcon from '../assets/images/bugTrackerIcon.jpeg'
import { Grid } from "@mui/material";



const Header = () => {

  
    return(
        
    <AppBar position="static" style={{justifyContent:'center'}}>

      <Grid container justifyContent={'center'} style={{paddingBottom:'10px'}}>
      <Box
            component='img'
            width={'80px'}
            marginTop='10px'
            marginBottom='1Opx'
            src={bugTrackerIcon}>
        </Box> 

      </Grid>
        
  
    

   </AppBar>
    )


}
    

export default Header
