import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    logout:{
        marginTop: theme.spacing(10),
        minWidth:'60px',
        fontSize:'20px',
        marginLeft:'100px',
        minHeight:'60px',
        [theme.breakpoints.down('xs')]:{
            marginTop:theme.spacing(0),
            width:'100%',
            marginLeft:'0',
            borderRadius:'0'
        }
    },
}))
const Logout = () => {

    const classes = useStyles()

    return(
        <Button variant='contained' className={classes.logout}>Logout</Button>
    )
}

export default Logout