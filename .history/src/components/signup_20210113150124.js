import React,{useState} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from '../axios';
const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

   const sendSignupData = (e) => {
       // e.preventDefault();
       const headers = {
           "content-type": "application/json"
          
       };
       // console.log(email,password);
       const userData = {
           email: email,
           password: password,
           passwordCheck: passwordCheck,
       };
       axios.post("/user/register", userData, { headers })

           .then((response) => {
               console.log(" login Success ===>", response.data);

           })
           .catch((error) => {
               console.log("Error ===>", error);
           });

       setEmail("");
       setPassword("");
       setPasswordCheck("");
   };
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name"  />
                    <TextField fullWidth label='Email' placeholder="Enter your email" type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password" type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" type='password' value={passwordCheck} onChange={e => setPasswordCheck(e.target.value)}/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'
                     onClick={(e) => {
                        sendSignupData(e);
                       
                    }}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;