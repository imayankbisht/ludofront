import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';
import { Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Netbalance() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
            <Grid item xs={12} md={4} lg={10}>
            <Title >Net balance  <span></span></Title>

            </Grid>
            <Grid item xs={12} md={4} lg={2}>
            <Chip label="today" style={{backgroundColor:'#4782da'}} />
            </Grid>
        </Grid>
      <Typography component="p" variant="h4">
        $500.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      on 17 jan, 2020
      </Typography>
      <div style={{marginTop:'30px'}}>
        <Link color="textSecondary" href="#" onClick={preventDefault}>
        <span style={{color:"#4caf50"}}> +17%</span>  View balance
        </Link>
      </div>
    </React.Fragment>
  );
}