import { Typography } from "@mui/material"
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import { Box } from "@mui/system"
import { makeStyles } from "@mui/styles"
import { getAllBugs,  
         setBug, 
         setViewBug, 
         setViewBugColor 
} from "../features/bugsSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"


const useStyle = makeStyles((theme)=>({
    bugsContainer:{
       marginTop:'16%',
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

const BugsOverview = () => {

    const classes = useStyle()
    const dispatch = useDispatch()
    const bugsOverview = useSelector(getAllBugs)
    
    useEffect(()=>{
     //set background color for view bug button
      dispatch(setViewBugColor(true))
    },[dispatch])

    //get any displayed bug on which user clicked and store in redux store
    const selectBug = (index) => {
        dispatch(setBug(bugsOverview[index]))
        dispatch(setViewBug(true))
    }

return(
 <Grid container justifyContent='center' className={classes.bugsContainer}>    
    {Object.keys(bugsOverview).length !== 0 ?
    Object.values(bugsOverview).map((item, index)=>{
        return(
            
            <Grid item xs={10} md={4} lg={4} xl={3} key={index}>
                <Item>
                    <Box className={classes.bugs} onClick={()=>selectBug(index)}>
                        <Typography variant="h4" style={{color:item.priority === 'high' ? 'red'
                                                                : item.priority === 'medium' ? 'orange' : 'green', fontWeight:900, marginBottom:'5px'}}>
                        
                            {item.name+`\n`}
                
                        </Typography>
    
                        <Typography variant="h4" style={{color:item.priority === 'high' ? 'red'
                                                                : item.priority === 'medium' ? 'orange' : 'green', fontWeight:900, marginBottom:'20px'}}>
                            {item.priority}
                        </Typography>

                        <Typography variant="h4" style={{color:item.priority === 'high' ? 'red'
                                                                : item.priority === 'medium' ? 'orange' : 'green', fontWeight:900}}>
                            v: {item.version}
                        </Typography>

                        <Typography variant="h6" style={{color:'black', fontStyle:'italic', textAlign:'right', marginRight:'5px'}}>
                            Status: {item.status}
                        </Typography>
    
                    </Box>
                </Item>
            </Grid>  
        
        )
    })
           
    : 'No bugs'}
 </Grid>)
}
    
export default BugsOverview

