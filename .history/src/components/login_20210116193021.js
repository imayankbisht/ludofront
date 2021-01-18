import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from '../axios';
import Dashboard from './Dashboard';
import {Link} from 'react-router-dom';
import "typeface-nunito";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
 overrides: {
    typography: {
        fontFamily: [
            "Nunito Sans, Roboto, sans-serif"
        ].join(','),
    },
 },});
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sendLoginData = () => {
    // e.preventDefault();
    const headers = {
        "content-type": "application/json"
       
    };
    // console.log(email,password);
    const userData = {
        email: email,
        password: password,
    };
    axios.post("/user/login", userData, { headers })

        .then((response) => {
            console.log(" login Success ===>", response.data);

        })
        .catch((error) => {
            console.log("Error ===>", error);
        });

    setEmail("");
    setPassword("");
};
  return (
    <ThemeProvider theme={theme}>
    <Container style={{ background: 'gainsboro' }} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
      
       <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email} 
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Link to="Dashboard">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
              sendLoginData(e);
             
          }}
          >
            Sign In
          </Button>
          </Link>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={SignUp} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
              
            </Grid>
          </Grid> */}
        </form>
      </div>
     
    </Container>
    </ThemeProvider>
  );
}