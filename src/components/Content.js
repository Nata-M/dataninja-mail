import React from 'react';
import ContentTop from './ContentTop';
import ContentBottom from './ContentBottom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',

    }
});

function Content() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ContentTop />
            <ContentBottom />
        </div>
    )
}


export default Content