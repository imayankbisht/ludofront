import React ,{useState , useEffect} from 'react';
import {apiCall} from '../services/apiCall';
import {Container, Typography ,Grid ,TextField , makeStyles ,Button} from '@material-ui/core';
import "typeface-nunito";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Notification from '../Notification';
const theme = createMuiTheme({
 
  typography: {
      fontFamily: [
        'Nunito',
        'serif',
      ].join(','),
  },
});

const useStyles = makeStyles((theme)=>({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'450px',
    
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  body: {
    backgroundColor: "#F7F9FC"
  },
    

}))


    function EditForm(props){
    const classes = useStyles();
    const [bet , SetBet]=useState("");
    const [rakePercent , SetrakePercent]=useState("");
    const [rakeCap , SetrakeCap]=useState("");
    const [notify , setNotify] = useState({isOpen:false , message:"" , type:""})


    useEffect(()=>{
        apiCall('get',`https://ylrwt.sse.codesandbox.io/room/edit/${props.match.params.id}`)
        .then(result=>{
          SetBet(result[0].bet);
          SetrakeCap(result[0].rakeCap);
          SetrakePercent(result[0].rakePercent);
        })
    },[props.match.params.id]);

    const handleSubmit = (e) =>{
       e.preventDefault();
        const data ={bet,rakeCap ,rakePercent};
        apiCall('put',`https://ylrwt.sse.codesandbox.io/room/edit/${props.match.params.id}`,data);
        setNotify({
          isOpen:true,
          message:'Edited Successfully!',
          type:'success'
        });
         setTimeout(function(){
          props.history.go(-1)
         }.bind(this),1000);
    }
    return(
      <ThemeProvider theme={theme}>
            <Container maxWidth="sm" className={classes.paper}>
            <Typography component="div" style={{ backgroundColor: '#FFFFFF', height: '80vh' ,margin:'30px' }}>
            <Typography align="center" variant="h3" component="h2" gutterBottom>
                EDIT ROOM
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Grid container spacing={3}>
                   <Grid item sm={4} md={12}>
                     <TextField
                        label="Bet Amount"
                        name="betAmount"
                        variant="outlined"
                        style={{width:'400px',marginLeft:'40px'}}
                        value={bet}
                        onChange={(e)=>SetBet(+e.target.value)}
                      />
                       </Grid>
                        <Grid item sm={4} md={12}> 
                      <TextField
                        label="Rake Percent"
                        name="rakePercent"
                        variant="outlined"
                        style={{width:'400px',marginLeft:'40px'}}
                        value={rakePercent}
                        onChange={(e)=>SetrakePercent(+e.target.value)}
                      />
                      </Grid>
                        <Grid item sm={4} md={12}> 
                      <TextField
                        label="Rake Cap Amount"
                        name="rakeCapAmount"
                        variant="outlined"
                        style={{width:'400px',marginLeft:'40px'}}
                        value={rakeCap}
                        onChange={(e)=>SetrakeCap(+e.target.value)}
                      />
                   </Grid>
                   <Button type="submit" variant="contained" color="primary"
                   style={{width:'400px',marginLeft:'50px'}}>
                   Submit
                </Button>
                </Grid>
               
            </form>
            </Typography>
            </Container>
            <Notification
               notify={notify}
               setNotify={setNotify}
            />
            </ThemeProvider>
    )
}

export default EditForm;