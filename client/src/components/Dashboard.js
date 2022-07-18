import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import DashboardButtons from "./DashboardButtons";
import Logout from "./Logout";
import ReportedBugsPriority from "./ReportedBugsPriority";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { getToken, userToken } from "../features/bugsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  dashboardLeftSide: {
    [theme.breakpoints.up("md")]: {
      borderRightStyle: "solid",
      height: 800,
    },
  },
}));
const Dashboard = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  }, [token.length, dispatch]);

  const classes = useStyle();

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={3}
        lg={3}
        xl={2}
        className={classes.dashboardLeftSide}
      >
        <DashboardButtons />
      </Grid>

      <Grid item xs={12} md={9} lg={9} xl={9}>
        <ReportedBugsPriority />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
