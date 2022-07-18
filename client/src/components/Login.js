import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  CardActions,
  Card,
  CardContent,
  Button,
  Typography,
  Icon,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getToken,
  getUserSigninData,
  loginUser,
  resetStore,
} from "../features/bugsSlice";
import { useEffect } from "react";

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: "30px",
    paddingBottom: "20px",
  },
  error: {
    verticalAlign: "middle",
  },
  title: {
    marginTop: "20px",
    color: "red",
  },
  textField: {
    marginLeft: "10px",
    marginRight: "10px",
    width: 300,
  },
  submit: {
    margin: "0 auto !important",
    marginBottom: "10px",
    minWidth: "120px !important",
    minHeight: "60px !important",
  },
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const userLoginData = useSelector(getUserSigninData);

  useEffect(() => {
    if (userLoginData.hasOwnProperty("token")) {
      navigate("/dashboard");
    }

    if (
      token === "Request failed with status code 500" ||
      token === "Request failed with status code 401"
    ) {
      dispatch(resetStore());
    }
  }, [userLoginData, token.length, dispatch]);

  //const userSigninData = useSelector(getUserSigninData)
  //const token = useSelector(getUserToken)
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  // send request to server to login user and in case there are errors collect error
  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      password: values.password || undefined,
    };
    dispatch(loginUser(user));
  };

  // get values from input fields
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <Item>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6" className={classes.tittle}>
                Sign In
              </Typography>

              <TextField
                id="name"
                type="text"
                label="Username"
                className={classes.textField}
                value={values.email}
                onChange={handleChange("name")}
                margin="normal"
              />
              <br />

              <TextField
                id="password"
                type="password"
                label="Password"
                className={classes.textField}
                value={values.password}
                onChange={handleChange("password")}
                margin="normal"
              />
              <br />

              {
                //display error returned from server
                Object.keys(userLoginData).length !== 0 && (
                  <Typography component="p" color="error">
                    <Icon color="error" className={classes.error}></Icon>
                    {userLoginData.error}
                  </Typography>
                )
              }
            </CardContent>

            <CardActions>
              <Button
                color="primary"
                variant="contained"
                onClick={clickSubmit}
                className={classes.submit}
              >
                Log In
              </Button>
            </CardActions>
          </Card>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Login;
