import { Card, Typography } from "@mui/material"
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import { Box } from "@mui/system"
import { makeStyles } from "@mui/styles"
import { getBugs, setBug } from "../features/bugsSlice"
import { useDispatch, useSelector } from "react-redux"


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
    const bugsOverview = useSelector(getBugs)
   
    const priority = ['high', 'medium','low']

    //const bugsOverview = []

    // for(let i=0; i<20; i++){
    //     bugsOverview.push({id:i, priority:priority[Math.floor(Math.random()*3)], n:1, name: `test test test test tes test`+ i, appVersion:`v`+Math.floor(Math.random()*2)+`.0` })
    // }

    // console.log(typeof bugsOverview)

    return(
 <Grid container justifyContent='center' className={classes.bugsContainer}>    
    {Object.keys(bugsOverview).length !== 0 ?
    Object.values(bugsOverview).map((item, index)=>{
        return(
            
            <Grid item xs={10} md={4} lg={4} xl={3} key={index}>
                <Item>
                    <Box className={classes.bugs} onClick={()=>dispatch(setBug(bugsOverview[index]))}>
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
                            {item.appVersion}
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

