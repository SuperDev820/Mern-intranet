import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    progressContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '600px'
    }    
});

export default function CircularUnderLoad() {
    const classes = useStyle();

    return (
        <div  className={classes.progressContent}>
            <CircularProgress/>
        </div>
    );
}