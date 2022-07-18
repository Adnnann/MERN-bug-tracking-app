import ButtonGroup from "@mui/material/ButtonGroup";
import { makeStyles } from "@mui/styles";
import {
  allUsers,
  getDashboardColor,
  getUserSigninData,
  getViewBugsColor,
  setCreateBug,
  setCreateBugColor,
  setDashboardColor,
  setViewBugColor,
  getCreateBugsColor,
} from "../features/bugsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 160,
    borderTopStyle: "solid",
    borderBottomStyle: "solid",
    textAlign: "left",
    marginLeft: "0",
    paddingLeft: "0",
    justifyContent: "left",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 120,
    },
  },
  root: {
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    width: "100%",
    marginLeft: "0px",
    paddingLeft: "0px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
    },
  },
  button: {
    borderStyle: "none",
    minHeight: "60px",
    fontSize: "24px",
    borderRadius: "0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      minWidth: "130px",
      display: "flex",
    },
  },
}));

const DashboardButtons = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //very ugly solution for setting background colors for displayed buttons
  //but effective one
  const dashboardColor = useSelector(getDashboardColor);
  const createBugColor = useSelector(getCreateBugsColor);
  const viewBugsColor = useSelector(getViewBugsColor);

  const userLoginData = useSelector(getUserSigninData);

  const dashboardSet = () => {
    dispatch(setDashboardColor(true));
    dispatch(setCreateBugColor(false));
    dispatch(setViewBugColor(false));
    navigate("/dashboard");
  };

  const viewBugsSet = () => {
    dispatch(setViewBugColor(true));
    dispatch(setDashboardColor(false));
    dispatch(setCreateBugColor(false));

    navigate("/viewBugs");
  };

  const createBugSet = () => {
    dispatch(setDashboardColor(false));
    dispatch(setCreateBugColor(true));
    dispatch(setViewBugColor(false));
    dispatch(allUsers());
    dispatch(setCreateBug(true));
  };

  return (
    <>
      <Button
        auto-focus="true"
        variant="contained"
        onClick={dashboardSet}
        className={classes.button}
        color="warning"
        fullWidth
      >
        Dashboard
      </Button>

      <Button
        className={classes.button}
        color="warning"
        variant="contained"
        onClick={viewBugsSet}
        fullWidth
      >
        View Bugs
      </Button>
      {Object.keys(userLoginData).length !== 0 &&
      userLoginData.user.role === 1 ? (
        <Button
          color="warning"
          className={classes.button}
          variant="contained"
          onClick={createBugSet}
          fullWidth
        >
          Create Bug
        </Button>
      ) : null}
    </>
  );
};

export default DashboardButtons;
