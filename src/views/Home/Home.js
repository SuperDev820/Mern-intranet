import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Departments from '../../components/Departments';
import QuickLinks from '../../components/QuickLinks';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        padding: '20px',
    },
}
));

export default function Home() {
    const classes = useStyles();

    return(
        <>
            <Navbar />
            <main className={classes.content}>
                <Grid container spacing={1}>
                    <Grid container item md={4} sm={6} xs={12} spacing={0}>
                        <Departments />
                    </Grid>
                    <Grid container item md={4} sm={6} xs={12} spacing={0}>
                        <QuickLinks />
                    </Grid>
                    <Grid container item md={4} sm={6} xs={12} spacing={0}>
                        <Departments />
                    </Grid>
                </Grid>
            </main>
        </>
    );
}