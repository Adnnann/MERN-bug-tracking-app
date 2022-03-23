import * as React from 'react';
import { Dialog } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getEditBug, 
         setEditBug, 
         getBug, 
         getAllUsers, 
         updateBug, 
         getBugStatus, 
         getBugs 
} from '../features/bugsSlice';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DialogContent } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import {useNavigate }from 'react-router-dom'

const useStyle = makeStyles((theme)=>({
    dialogWindow:{
        width:'90%'
    },
    container:{
        [theme.breakpoints.down('xs')]:{
            marginTop:'2%'
        }
    }, 
    topButtons:{
        borderRadius:'25px', 
        minHeight:'60px', 
        minWidth:"120px",
        [theme.breakpoints.down('xs')]:{
            minWidth:'80px',
            borderRadius:'5px',
            marginRight:"10px"
        }
    },
    itemType:{
        textAlign:'right',
        [theme.breakpoints.down('xs')]:{
            textAlign:'left'
        }

    },
    bugName:{
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },
    smallScreenTitle:{
        [theme.breakpoints.up('md')]:{
            display:'none',
        }
    }
}))

const EditBug = () => {
  
const dispatch = useDispatch()
const editBug = useSelector(getEditBug)
const bug = useSelector(getBug)
const users = useSelector(getAllUsers)
const bugStatus = useSelector(getBugStatus)
const navigate = useNavigate()

const classes = useStyle()

const [values, setValues] = useState({
    name: '',
    details:'',
    steps:'',
    version:'',
    priority:'',
    assigned:'',
})
//store all values from bug in useEffect to prevent delays. Use bug.name or any other item in
//bug object in useEffect dependency array
useEffect(()=>{
    setValues({
        id:bug._id,
        name: bug.name,
        details:bug.details,
        steps:bug.steps,
        version:bug.version,
        priority:bug.priority,
        assigned:bug.assigned,
    })
    //bug updated successfuly do redirect user to viewBugs
    if(bugStatus.hasOwnProperty('message')){
        dispatch(getBugs())
        dispatch(setEditBug(false))
        navigate('/viewBugs')
    }

},[bug.name, bugStatus])

const handleChange = name => event => {
    setValues({...values, [name]:event.target.value})
}

const clickHandler = () => {
    const bug = {
        id: values.id,
        bug:{
            name: values.name,
            details: values.details,
            steps: values.steps,
            version: values.version,
            priority: values.priority,
            assigned:values.assigned,
        }
    }
    dispatch(updateBug(bug))
}


return (

<Dialog
maxWidth='md'
open={editBug}
onClose={()=>dispatch(setEditBug(false))}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description">

  <DialogContent tabIndex={-1}>

    <Grid 
    container justifyContent={'center'} textAlign="center" className={classes.container} >
        
        <Grid item xs={12} md={10} lg={10} xl={10}>
  
        <Grid container justifyContent={'center'} style={{
            marginBottom:'4%', paddingBottom:'10px', borderBottomStyle:'solid'}}>
    
            <Grid item xs={12} md={9} lg={9} xl={9} className={classes.bugName}>
                <Item>
                    <Typography variant='h4'  style={{wordBreak:'break-all'}}>Edit Bug</Typography>
                </Item>
            </Grid>

            <Grid item xs={8} md={3} lg={3} xl={3} className={classes.smallScreenTitle}>
                <Item>
                    <Typography variant='h4'  style={{wordBreak:'break-all', textAlign:'center'}}>Edit Bug</Typography>
                </Item>
        </Grid>

            <Grid item xs={4} md={3} lg={3} xl={3}>
                <Item>
                <Button 

                onClick={()=>dispatch(setEditBug(false))}
                variant='contained' 
                className={classes.topButtons}>Close</Button>
                </Item>
            </Grid>

            

        </Grid>

        

        <Grid container justifyContent={'center'}>

        <Grid item xs={12} md={3} lg={3} xl={3} style={{marginBottom:'10px'}}>
                <Item className={classes.itemType}>
                <Typography variant='h5' 
                style={{display:'inline-flex', paddingTop:'10px', marginRight:'20px'}}>Name:</Typography>
                </Item>
            </Grid>

    
            <Grid item xs={12} md={7} lg={7} xl={7} style={{marginBottom:'10px'}}>
                <Item>
                    <TextField style={{display:'inline-flex'}} onChange={handleChange('name')} value={values.name} fullWidth/>
                </Item>
            </Grid>

            <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                <Item>
                    
                </Item>
            </Grid>

            <Grid item xs={12} md={3} lg={3} xl={3} style={{marginBottom:'10px'}}>
                <Item className={classes.itemType}>
                <Typography variant='h5' 
                style={{display:'inline-flex', paddingTop:'10px', marginRight:'20px'}}>Details:</Typography>
                </Item>
            </Grid>

    
            <Grid item xs={12} md={7} lg={7} xl={7} style={{marginBottom:'10px'}}>
                <Item>
                    <TextField style={{display:'inline-flex'}} onChange={handleChange('details')} value={values.details} fullWidth/>
                </Item>
            </Grid>

            <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                <Item>
                    
                </Item>
            </Grid>

            <Grid item xs={12} md={3} lg={3} xl={3} style={{marginBottom:'10px'}}>
                <Item className={classes.itemType}>
                <Typography 
                variant='h5' 
                style={{display:'inline-flex', paddingTop:'10px', marginRight:'20px'}}>Steps:</Typography>
                </Item>
            </Grid>

    
            <Grid item xs={12} md={7} lg={7} xl={7} style={{marginBottom:'10px'}}>
                <Item>
                    <TextField style={{display:'inline-flex'}} onChange={handleChange('steps')} value={values.steps} fullWidth/>
                </Item>
            </Grid>

            <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                <Item>
                    
                </Item>
            </Grid>

            <Grid item xs={12} md={3} lg={3} xl={3} style={{marginBottom:'10px'}}>
                <Item className={classes.itemType}>
                <Typography 
                variant='h5' 
                style={{display:'inline-flex', paddingTop:'10px', marginRight:'20px'}}
               >Priority:</Typography>
                </Item>
            </Grid>

    
            <Grid item xs={12} md={7} lg={7} xl={7} style={{marginBottom:'10px'}}>
                <Item>
                <Select fullWidth value={values.priority ? values.priority : ''} onChange={handleChange('priority')}>
                    {/* getAllNames of people in database, map and print items in MenuItem */}
                        <MenuItem  value={'low'} style={{color:'black', backgroundColor:'green'}}>Low</MenuItem>
                        <MenuItem value={'medium'} style={{color:'black', backgroundColor:'orange'}}>Medium</MenuItem>
                        <MenuItem value={'high'} style={{color:'black', backgroundColor:'red'}}>High</MenuItem>
                    </Select>
                </Item>
            </Grid>

            <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                <Item>
                    
                </Item>
            </Grid>


            <Grid item xs={12} md={3} lg={3} xl={3} style={{marginBottom:'10px'}}>
                <Item className={classes.itemType}>
                <Typography 
                variant='h5' 
                style={{display:'inline-flex', paddingTop:'10px', marginRight:'20px'}}>Assigned:</Typography>
                </Item>
            </Grid>

    
            <Grid item xs={12} md={7} lg={7} xl={7} style={{marginBottom:'10px'}}>
                <Item>
                    {/* <TextField style={{display:'inline-flex'}} fullWidth/> */}
      
                    <Select fullWidth value={
                        Object.keys(users).length !== 0 ?
                                                values.assigned ?
                                                values.assigned : ''
                                                :''} onChange={handleChange('assigned')}>
                    
                    {
                                Object.keys(users).length !== 0 ?
                                Object.values(users).map((item, index)=>{
                                    return(
                                        <MenuItem key={index} 
                                        value={item.name}
                                        >{item.name}</MenuItem>
                                    )
                                }) : ''
                            }
                    </Select>
                </Item>
            </Grid>

            <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                <Item>
                    
                </Item>
            </Grid>



            <Grid item xs={12} md={3} lg={3} xl={3} style={{marginBottom:'10px'}}>
                <Item className={classes.itemType}>
                <Typography 
                variant='h5' 
                style={{display:'inline-flex', paddingTop:'10px', marginRight:'20px'}}>Application version:</Typography>
                </Item>
            </Grid>

    
            <Grid item xs={12} md={7} lg={7} xl={7} style={{marginBottom:'10px'}}>
                <Item>
                    <TextField style={{display:'inline-flex'}} onChange={handleChange('version')} value={values.version}fullWidth/>
                </Item>
            </Grid>

            <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                <Item>
                    <Button 
                    onClick={clickHandler}
                    variant='contained' 
                    style={{minHeight:'60px', minWidth:"100px"}}>Edit</Button>
                </Item>
            </Grid>

           

            
           
            
        </Grid>

       

    
        </Grid>
</Grid>
</DialogContent>
  </Dialog>
  
 
  );
}

export default EditBug