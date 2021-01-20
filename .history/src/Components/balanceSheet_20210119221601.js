import React from 'react';
import Deposits from './Cards/Deposits';
import  Cashout from './Cards/Cashout';
import Netbalance from './Cards/Netbalance';
import Rake from './Cards/Rake';
import Refund from './Cards/Refund';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      fixedHeight: {
        height: ,
      },
    }));
export default function BalanceSheet(){
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return(
        <div>
           
          <Grid container spacing={3}>
          
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
           
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Rake />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Cashout />
              </Paper>
            </Grid>
          
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Refund />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Netbalance />
              </Paper>
            </Grid>
           
           
          </Grid>
         
        
        </div>
    )
}