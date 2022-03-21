
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import DashboardButtons from './DashboardButtons'
import Logout from './Logout'
import BugsOverview from './BugOverview'
import { Box } from "@mui/system"


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
  

const ReportedBugs = () => {

    const classes = useStyles()

    return(
        <Grid container>

        <Grid item xs={12} md={3} lg={3} xl={3} className={classes.dashboardLeftSide}>
            <Item>

                <DashboardButtons viewBugs={'grey'}/>
                <Logout />

            </Item>
        </Grid>

        <Grid item xs={12} md={9} lg={9} xl={9}>
            <Item>
                <BugsOverview />
            </Item>
        </Grid>

        

    </Grid>

    )
}

export default ReportedBugs