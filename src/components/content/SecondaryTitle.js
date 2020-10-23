import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BlockComponent from './BlockComponent';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '900px',
        margin: ' 32px auto',
    },
    primary: {
        fontSize: '50px',
        fontWeight: '900',
        width: '100%',
        color: '#ff4e00',
        lineHeight: '1.11',
    },
    secondary: {
        color: '#696969',
        fontFamily: 'FiraGO',
        lineHeight: '1.86',
        width: '100%',
        margin: '20px auto',
        fontSize: '14px',
        // textIndent: '10px'
    },
    block: {
        justifyContent: 'center',
        marginTop: '20px',
        padding: '0 64px'
    }
});

function SecondaryTitle() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid item >
                <Typography className={classes.primary}>online advertising tool</Typography>
            </Grid>
            <Grid item>
                <Typography variant='body2' className={classes.secondary}>Comprised of Ads Management, User Tracking, Powerful built-in optimization tool,
                Simple CRM, Real-Time Reporting system, Website <br /> Builder and Communication/Funnel Builder,
                we aim to give companies one, easy solution to build powerful marketing
                     campaigns and make <br />their digital advertising profitable.</Typography>
            </Grid>
            <Grid className={classes.block} container item>
                <BlockComponent img={<img alt='palette' src={require('../../photos/painter-palette.svg')} />} text='Perfect Design' text2='Management, User Tracking' />
                <BlockComponent img={<img alt='palette' src={require('../../photos/man-cycling.svg')} />} text='Faster than' text2='Any other product' />
                <BlockComponent img={<img alt='palette' src={require('../../photos/mark-as-favorite-star.svg')} />} text='Simple Experience' text2='of Product' />
            </Grid>
        </Grid>

    )
}


export default SecondaryTitle