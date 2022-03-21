import {Box, Button, Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import DashboardButtons from './DashboardButtons'
import Logout from './Logout'
import ReportedBugsPriority from './ReportedBugsPriority'
import { makeStyles } from '@mui/styles'



const useStyle = makeStyles((theme)=>({
    dashboardLeftSide:{
        [theme.breakpoints.up('md')]:{
            borderRightStyle:'solid', 
            height:800,
        }
    },
    
}))
const Dashboard = () => {

    const classes = useStyle()
  

    return (
        <Grid container>

            <Grid item xs={12} md={3} lg={3} xl={3} className={classes.dashboardLeftSide}>
                <Item>

                    <DashboardButtons dashboard={'grey'}/>
                    <Logout />

                </Item>
            </Grid>

            <Grid item xs={12} md={9} lg={9} xl={9}>
                <Item>
                    <ReportedBugsPriority />
                </Item>
            </Grid>

            

        </Grid>
    )
}

export default Dashboard