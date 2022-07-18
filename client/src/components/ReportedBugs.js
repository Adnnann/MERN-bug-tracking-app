import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import DashboardButtons from "./DashboardButtons";
import Logout from "./Logout";
import BugsOverview from "./BugOverview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getToken,
  getViewBugsColor,
  setViewBugColor,
  userToken,
} from "../features/bugsSlice";
import { useNavigate } from "react-router-dom";

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
    color: "black",
    textAlign: "left",
    paddingLeft: "5px",
    marginLeft: "0px",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlignLast: "left",
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      minWidth: "130px",
    },
  },
  dashboardLeftSide: {
    [theme.breakpoints.up("md")]: {
      borderRightStyle: "solid",
      height: 800,
    },
  },
}));

const ReportedBugs = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const viewBugColor = useSelector(getViewBugsColor);
  const navigate = useNavigate();
  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(userToken());
    //In case user tried to visit url /protected without token, redirect
    //to signin page
    if (
      token === "Request failed with status code 500" ||
      token === "Request failed with status code 401" ||
      !token.hasOwnProperty("message")
    ) {
      navigate("/");
    }

    dispatch(setViewBugColor(true));
  }, [token.length, dispatch]);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={3}
        lg={3}
        xl={3}
        className={classes.dashboardLeftSide}
      >
        <DashboardButtons />
      </Grid>

      <Grid item xs={12} md={9} lg={9} xl={9}>
        <BugsOverview />
      </Grid>
    </Grid>
  );
};

export default ReportedBugs;
