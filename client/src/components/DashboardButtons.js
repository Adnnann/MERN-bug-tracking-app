import Grid from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { makeStyles } from '@mui/styles';
import { useReducer } from "react";
import { createBug, getUserSigninData, setBug, setCreateBug } from "../features/bugsSlice";
import { useDispatch, useSelector } from "react-redux";



const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 160,
    borderTopStyle:'solid',
    borderBottomStyle:'solid',
    textAlign:'left',
    marginLeft:'0',
    paddingLeft:'0',
    justifyContent:'left',
    [theme.breakpoints.down('xs')]:{
      marginTop:0
    },
    [theme.breakpoints.up('md')]:{
      marginTop:120
    }
  },
  root: {
    display: "flex",
    textAlign:"left",
    flexDirection: "column",
    width: '100%',
    marginLeft:'0px',
    paddingLeft:'0px',
    [theme.breakpoints.down('xs')]:{
      flexDirection:'row',
    }
  },
  button:{
      borderStyle:'none',
      minHeight:'60px',
      fontSize:'24px',
      color:'black',
      textAlign:'left',
      paddingLeft:'5px',
      marginLeft:'0px',
      paddingTop:'10px',
      paddingBottom:'10px',
      textAlignLast:'left',
      backgroundColor:'white',
      [theme.breakpoints.down('xs')]:{
        fontSize:'20px',
        minWidth:'130px',
      }
  },

}))

const DashboardButtons = ({dashboard, viewBugs}) => {
 
    const classes = useStyles();
    const dispatch = useDispatch()
    const userLoginData = useSelector(getUserSigninData)

    
    return (
      <div className={classes.container}>
        <ButtonGroup
          aria-label="full width outlined button group"
          className={classes.root}
          classes={{ groupedOutlined: classes.groupedOutlined }}
        >
          <button className={classes.button} style={{backgroundColor:dashboard}}>Dashboard</button>
          <button className={classes.button} style={{backgroundColor:viewBugs}}>View Bug</button>
          {Object.keys(userLoginData).length !== 0 && userLoginData.user.role === 1 ? 
          <button className={classes.button} onClick={()=>dispatch(setCreateBug(true))}>Create Bug</button>
          : null}
        </ButtonGroup>
      </div>
    );
  }
  
  export default DashboardButtons
  