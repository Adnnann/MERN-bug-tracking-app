import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { resetStore, signoutUser } from "../features/bugsSlice";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logout: {
    marginTop: theme.spacing(5),
    minWidth: "60px",
    fontSize: "20px",
    borderRadius: "0px",
    minHeight: "60px",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(0),
      width: "100%",
      marginLeft: "0",
      borderRadius: "0",
    },
  },
}));
const Logout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signout = () => {
    dispatch(signoutUser());
    dispatch(resetStore());
    navigate("/");
  };

  return (
    <Button
      variant="outlined"
      fullWidth
      className={classes.logout}
      onClick={signout}
    >
      Logout
    </Button>
  );
};

export default Logout;
