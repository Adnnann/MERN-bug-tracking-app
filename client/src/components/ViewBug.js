import * as React from 'react';
import { Dialog } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getViewBug, getBugs,
    setViewBug, getBug, updateBugStatus, setEditBug, deleteBug, getDeleteBugStatus, getBugStatus, allUsers } from '../features/bugsSlice';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DialogContent } from '@mui/material';
import date from 'date-and-time'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


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
        marginBottom:'10px',
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

const ViewBug = () => {
  
const dispatch = useDispatch()
const navigate = useNavigate()
const viewBugStatus = useSelector(getViewBug)
const bug = useSelector(getBug)
const deleteBugStatus = useSelector(getDeleteBugStatus)
const updateStatus = useSelector(getBugStatus)

const classes = useStyle()

useEffect(()=>{
    if(deleteBugStatus.hasOwnProperty('message')){
        dispatch(getBugs())
        dispatch(setViewBug(false))
    }
    if(updateStatus.hasOwnProperty('message')){
        dispatch(getBugs())
    dispatch(setViewBug(false))
    console.log(updateStatus)
    }
    
},[deleteBugStatus, updateStatus])

const markComplete = () => {

    const status = {
        params: bug._id,
        status: bug.status === 'Completed' ? 'Active' : 'Completed'
    }
    dispatch(updateBugStatus(status))    
}

const editBug = () => {
    dispatch(setViewBug(false))
    dispatch(allUsers())
    dispatch(setEditBug(true))
}

return (

<Dialog
    fullScreen
    open={viewBugStatus}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">

<DialogContent tabIndex={-1}>

            <Grid 
            container 
            justifyContent={'center'} 
            textAlign="center" 
            className={classes.container} >
            {
                Object.keys(bug).length !== 0 ? 
                <Grid item xs={12} md={10} lg={10} xl={10}>
            
                    <Grid container justifyContent={'center'} 
                    style={{marginBottom:'4%',  borderBottomStyle:'solid'}}>
                    
                    <Grid item xs={4} md={3} lg={3} xl={3}>
                            <Item>
                                <Button onClick={()=>dispatch(deleteBug(bug._id))}
                                variant='contained' 
                                className={classes.topButtons}>Delete</Button>
                            </Item>
                        </Grid>

                        <Grid item xs={4} md={6} lg={6} xl={6} className={classes.bugName}>
                            <Item>
                                <Typography variant='h4'  style={{wordBreak:'break-all'}}>{bug.name}</Typography>
                            </Item>
                        </Grid>

                        <Grid item xs={4} md={3} lg={3} xl={3}>
                            <Item>
                            <Button 
                            variant='contained' className={classes.topButtons}
                            onClick={()=>dispatch(setViewBug(false))}>Close</Button>
                            </Item>
                        </Grid>

                        <Grid item xs={12} md={6} lg={6} xl={6} className={classes.smallScreenTitle}>
                            <Item>
                                <Typography variant='h4'  style={{wordBreak:'break-all', textAlign:'center'}}>{bug.name}</Typography>
                            </Item>
                        </Grid>

                    </Grid>


                    <Grid container justifyContent={'center'}>
                        <Grid item xs={12} md={3} lg={3} xl={3} style={{marginBottom:'10px'}}>
                            <Item className={classes.itemType}>
                            <Typography variant='h5' 
                            style={{display:'inline-flex', paddingTop:'10px', marginRight:'20px'}}>Details:</Typography>
                            </Item>
                        </Grid>

                
                        <Grid item xs={12} md={7} lg={7} xl={7} style={{marginBottom:'10px'}}>
                            <Item>
                                <TextField style={{display:'inline-flex'}} fullWidth defaultValue={bug.details} disabled/>
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
                                <TextField style={{display:'inline-flex'}} fullWidth defaultValue={bug.steps} disabled/>
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
                                <TextField style={{display:'inline-flex'}} fullWidth defaultValue={bug.priority} disabled/>
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
                            style={{display:'inline-flex', paddingTop:'10px', marginRight:'20px'}}>Creator:</Typography>
                            </Item>
                        </Grid>

                
                        <Grid item xs={12} md={7} lg={7} xl={7} style={{marginBottom:'10px'}}>
                            <Item>
                                <TextField style={{display:'inline-flex'}} defaultValue={bug.creator} fullWidth disabled/>
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
                                <TextField style={{display:'inline-flex'}} defaultValue={bug.version} disabled fullWidth/>
                            </Item>
                        </Grid>

                        <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                            <Item>
                                <Button onClick={editBug}
                                variant='contained' style={{minHeight:'60px', minWidth:"100px"}}>Edit</Button>
                            </Item>
                        </Grid>

                        <Grid item xs={12} md={3} lg={3} xl={3} style={{marginBottom:'10px'}}>
                            <Item className={classes.itemType}>
                            <Typography 
                            variant='h5' 
                            style={{display:'inline-flex', paddingTop:'10px', marginRight:'20px'}}
                            >Time created:</Typography>
                            </Item>
                        </Grid>

                
                        <Grid item xs={12} md={7} lg={7} xl={7} style={{marginBottom:'10px'}}>
                            <Item>
                                <TextField 
                                style={{display:'inline-flex'}} 
                                fullWidth 
                                defaultValue={date.format(new Date(bug.date),"HH:MM")}
                                disabled
                                />
                            </Item>
                        </Grid>

                        <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                            <Item>
                                <Button variant='contained' 
                                color = {bug.status === 'Active' ? 'success' : 'error'}
                                onClick={markComplete}
                                style={{minHeight:'60px', minWidth:"90px", marginLeft:'2px', marginRight:'2px'}}>Mark {bug.status === 'Active' ? 'Completed' : 'Active'}</Button>
                            </Item>
                        </Grid>
                        
                    </Grid>
                
                </Grid>
            :null }
        </Grid>

    </DialogContent>

</Dialog>
  
 
  );
}

export default ViewBug