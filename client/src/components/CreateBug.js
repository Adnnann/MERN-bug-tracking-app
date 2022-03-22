import * as React from 'react'
import { Dialog, Select } from "@mui/material";
import Button from '@mui/material/Button';
import { Icon } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, 
        getCreateBug, 
        getUserSigninData, 
        setCreateBug, 
        clearBugMessage, 
        getBugs,
        getAddBug,
        getToken,
        addBug,
        setCreateBugColor,
        setViewBugColor,
} from '../features/bugsSlice';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DialogContent } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
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

const CreateBug = () => {

const users = useSelector(getAllUsers)
const user = useSelector(getUserSigninData)
const navigate = useNavigate()

const dispatch = useDispatch()
const createBug = useSelector(getCreateBug)
const addBugStatus = useSelector(getAddBug)
const token = useSelector(getToken)

useEffect(()=>{

    //upon successful creation of bug get all bugs from db, clear message used bellow
    // and set all values to '
    if(addBugStatus.hasOwnProperty('message')){
        dispatch(getBugs())
        dispatch(clearBugMessage())
        setValues({
            name: '',
            details:'',
            steps:'',
            version:'',
            priority:'',
            assigned:'',
        })
        //set modal create bug window to false
        dispatch(setCreateBug(false))
        dispatch(setCreateBugColor(false))
        dispatch(setViewBugColor(true))
        navigate('/viewBugs')
    }
    
},[token.length, dispatch, addBugStatus])

const classes = useStyle()
const [values, setValues] = useState({
    name: '',
    details:'',
    steps:'',
    version:'',
    priority:'',
    assigned:'',
})

const handleChange = name => event => {
    setValues({
        ...values,
        [name]:event.target.value
    })
}

const clickHandler = () => {
    const bug = {
        name: values.name,
        details: values.details,
        steps: values.steps,
        priority:values.priority,
        version: values.version,
        assigned: values.assigned,
        creator: user.user.name
    }
    dispatch(addBug(bug))
    
}

const close = () => {
   dispatch(setCreateBug(false))
   dispatch(getBugs())
   navigate('/viewBugs')
}


  return (

<Dialog
maxWidth='md'
open={createBug}
onClose={()=>dispatch(setCreateBug(false))}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description">

<DialogContent tabIndex={-1}>

  
    <Grid 
    container 
    justifyContent={'center'} textAlign="center" className={classes.container} >

        <Grid item xs={12} md={10} lg={10} xl={10}>
        
            <Grid container justifyContent={'center'} style={{
                    marginBottom:'4%', borderBottomStyle:'solid'}}>

                <Grid item xs={12} md={9} lg={9} xl={9}>
                    <Item>
                        <Typography variant='h4'  
                        style={{textAlign:'center'}}>Create Bug</Typography>
                    </Item>
                </Grid>

                <Grid item xs={12} md={3} lg={3} xl={3}>
                    <Item>
                        <Button 
                         variant='contained'
                         style={{minHeight:'60px', marginBottom:'5px'}}
                         onClick={close}>Close</Button> 
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
                        <TextField 
                        name='details'
                        value={values.name}
                        onChange={handleChange('name')}
                        style={{display:'inline-flex'}} fullWidth/>
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
                        <TextField 
                        value={values.details}
                        name='details'
                        onChange={handleChange('details')}
                        style={{display:'inline-flex'}} fullWidth/>
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
                        <TextField 
                        value={values.steps}
                        name='steps'
                        onChange={handleChange('steps')}
                        style={{display:'inline-flex'}} fullWidth/>
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
                    <Select fullWidth value={values.priority ? values.priority : ''}
                        onChange={handleChange('priority')}>
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
        
                        <Select fullWidth value={values.assigned ? values.assigned : ''} name='assigned'
                        onChange={handleChange('assigned')}>
                        {/* getAllNames of people in database, map and print items in MenuItem */}
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
                        <TextField 
                        value={values.version}
                        name='version'
                        onChange={handleChange('version')}
                        style={{display:'inline-flex'}} fullWidth/>
                    </Item>
                </Grid>

                <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                    <Item>
                        
                    </Item>
                </Grid>

                { //display error returned from server
                
                    Object.keys(addBugStatus).length !== 0 && addBugStatus.hasOwnProperty('error') ? (
                        <Grid item xs={12} md={12} lg={12} xl={12} style={{marginBottom:'10px'}}>
                            <Item>
                            <Typography component='p' color='error'>
                                <Icon color='error' className={classes.error}></Icon>
                                {addBugStatus.error}
                            </Typography>
                            </Item>
                        </Grid>
                    ) : null
                }

                { //display error returned from server
                
                    Object.keys(addBugStatus).length !== 0 && addBugStatus.hasOwnProperty('message') ? (
                        <Grid item xs={12} md={12} lg={12} xl={12} style={{marginBottom:'10px'}}>
                          <Item>
                            <Typography component='p' color='green'>
                                <Icon color='green' className={classes.error}></Icon>
                                {addBugStatus.message}
                            </Typography>
                            </Item>
                        </Grid> 
                    ) : null
                }

                <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                    <Item>
                        <Button 
                        variant='contained' 
                        style={{marginLeft:'5px',minHeight:'60px', minWidth:"100px"}}
                        onClick={clickHandler}>Create Bug</Button>
                    </Item>
                </Grid>
     
            </Grid>

        </Grid>
    
    </Grid>

    </DialogContent>

</Dialog>
  
 
  );
}

export default CreateBug