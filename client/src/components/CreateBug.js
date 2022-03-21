import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { Dialog, DialogContentText, Modal, Select } from "@mui/material";
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getCreateBug, setCreateBug} from '../features/bugsSlice';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Input } from '@mui/material';
import { DialogContent } from '@mui/material';
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';



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
  
const dispatch = useDispatch()
const bug = useSelector(getCreateBug)


const classes = useStyle()


  return (

    <Dialog
    fullScreen
    open={bug}
    onClose={()=>dispatch(setCreateBug(false))}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
   
  >
  <DialogContent tabIndex={-1}>

  
<Grid 
 container justifyContent={'center'} textAlign="center" className={classes.container} >
<Grid item xs={12} md={10} lg={10} xl={10}>
  
      

      
        <Grid container justifyContent={'center'} style={{overflow:"scroll",
            marginBottom:'4%', paddingBottom:'10px', borderBottomStyle:'solid'}}>
        


            <Grid item xs={12} md={6} lg={6} xl={6}>
                <Item>
                    <Typography variant='h4'  
                    style={{wordBreak:'break-all', 
                    textAlign:'center'}}>Create Bug</Typography>
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
                    <TextField style={{display:'inline-flex'}} fullWidth/>
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
                    <TextField style={{display:'inline-flex'}} fullWidth/>
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
                <Select fullWidth defaultValue={''}>
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
      
                    <Select fullWidth defaultValue={''}>
                    {/* getAllNames of people in database, map and print items in MenuItem */}
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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
                    <TextField style={{display:'inline-flex'}} fullWidth/>
                </Item>
            </Grid>

            <Grid item xs={12} md={2} lg={2} xl={2} style={{marginBottom:'10px'}}>
                <Item>
                    <Button variant='contained' style={{minHeight:'60px', minWidth:"100px"}}>Create Bug</Button>
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