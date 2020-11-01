import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RedoIcon from '@material-ui/icons/Redo';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    google: {
        width: '35px',
        padding: '6px',
        background: 'white'
    },
    paper: {
        display: 'flex',
        alignItems: 'center',
        width: '205px',
        background: '#3f51b5'
    },
    title: {
        color: 'white',
        fontSize: '17px',
        marginLeft: '10px'
    }
  }));

export default function GoogleLink() {

    const classes = useStyles();

    return (
    <Box mt={5}>
        <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
                <Typography variant="subtitle1" style={{color: 'black',fontSize: '17px'}}>
                    Social logins
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <Paper className={classes.paper}>
                    <img className={classes.google} src="/google-icon.svg" ></img>
                    <Typography className={classes.title}>
                        Sign in with Google
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <FacebookIcon style={{color: '#4d5792'}} fontSize="large" />
                <TwitterIcon style={{color: '#5bced4'}} fontSize="large" />
                <LinkedInIcon style={{color: '#1579c1'}} fontSize="large" />
                <AttachMoneyIcon style={{color: '#50a576'}} fontSize="large" />
            </Grid>
        </Grid>
    </Box>
    );
}



    

    