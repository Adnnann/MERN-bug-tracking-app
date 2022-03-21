import { Card, Typography } from "@mui/material"
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import { Box } from "@mui/system"
import { makeStyles } from "@mui/styles"
import { useSelector } from "react-redux"
import { getBugs } from "../features/bugsSlice"


const useStyle = makeStyles((theme)=>({
    bugsContainer:{
       marginTop:'16%',
       textOverflow:'none',
       paddingLeft:'2%',
       paddingRight:'2%',
       [theme.breakpoints.up('lg')]:{
           marginTop:120
       },
       [theme.breakpoints.down('xs')]:{
        marginTop:5
    }

    },
    bugs:{
        backgroundColor:'lightgrey', 
        borderStyle:'solid', 
        minHeight:'120px', 
        textAlign:'center', 
        width:'90%',
        marginBottom:'2%',
    }
}))

const ReportedBugsPriority = () => {

    const classes = useStyle()
    const bugsOverview = useSelector(getBugs)

    // const bugsOverview = []

    // for(let i=0; i<20; i++){
    //     bugsOverview.push({priority:priority[Math.floor(Math.random()*3)], n:1 })
    // }

    return(
    <Grid container justifyContent='center' className={classes.bugsContainer}>
        {Object.keys(bugsOverview).length !== 0 ?
           <> 
        <Grid item xs={10} md={4} lg={4} xl={3}>
        <Item>
            <Box 
            className={classes.bugs}>
            
                <Typography variant="h4" style={{marginBottom:'20%', color:'red', fontWeight:900}}>
                
                High
           
                </Typography>

                <Typography variant="h4" style={{color:'red', fontWeight:900}}>
                { 
                    Object.values(bugsOverview)
                .filter(item=>item.priority==='high')
                .map(item=>item.n)
                .reduce((prev,curr)=>prev+curr)
                }
                </Typography>

            </Box>
        </Item>
    </Grid>
    
    <Grid item xs={10} md={4} lg={4} xl={3}>
        <Item>
            <Box className={classes.bugs}>
                <Typography variant="h4" style={{marginBottom:'20%', color:'orange', fontWeight:900}}>
                
                High
           
                </Typography>

                <Typography variant="h4" style={{color:'orange', fontWeight:900}}>
                {
                    Object.values(bugsOverview)
                .filter(item=>item.priority==='medium')
                .map(item=>item.n)
                .reduce((prev,curr)=>prev+curr)
                }
                </Typography>

            </Box>
        </Item>
    </Grid>
    
    <Grid item xs={10} md={4} lg={4} xl={3}>
        <Item>
            <Box className={classes.bugs}>
                <Typography variant="h4" style={{marginBottom:'20%', color:'green', fontWeight:900}}>
                
                Low
           
                </Typography>

                <Typography variant="h4" style={{color:'green', fontWeight:900}}>
                {
                    Object.values(bugsOverview)
                .filter(item=>item.priority==='low')
                .map(item=>item.n)
                .reduce((prev,curr)=>prev+curr)
                }
                </Typography>

            </Box>
        </Item>
    </Grid>
    </> : <Typography variant="h4" style={{fontStyle:'italic', color:'green'}}>
                There are no reported bugs
    </Typography>}
            
    </Grid>  
       
    )
}

export default ReportedBugsPriority