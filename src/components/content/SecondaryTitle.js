import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BlockComponent from './BlockComponent';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xxs: 0,
            xs: 480,
            sm: 700,
            md: 900,
            lg: 1280,
            xl: 1920,
        },
    },
})




const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '32px auto',
        background: 'repeating-linear-gradient(180deg, transparent, 20%, #f9f5ef )',
        paddingTop: '350px',
        position: 'relative',
        marginTop: '-350px',
        [theme.breakpoints.down('md')]: {
            paddingTop: 0,
            marginTop: '32px',
            background: 'none'
        }
    },
    primary: {
        fontSize: '50px',
        fontWeight: '900',
        width: '100%',
        color: '#ff4e00',
        lineHeight: '1.11',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px'
        }
    },
    break: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    secondary: {
        color: '#696969',
        fontFamily: 'FiraGO',
        lineHeight: '1.86',
        width: '62%',
        margin: '20px auto',
        fontSize: '14px',
        [theme.breakpoints.down('md')]: {
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            textIndent: '0',
            textAlign: 'justify',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
        // textIndent: '10px'
    },
    block: {
        width: '100%',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '20px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            alignItems: 'flex-start'
        },
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
                Simple CRM, Real-Time Reporting system, Website Builder and Communication/Funnel Builder,
                we aim to give companies one, easy solution to build powerful marketing
                     campaigns and make their digital advertising profitable.</Typography>
            </Grid>
            <Grid className={classes.block} container item>
                <BlockComponent img={<img alt='palette' src={require('../../photos/painter-palette.svg')} />} text='Perfect Design ' text2='Management, User Tracking' />
                <BlockComponent img={<img alt='palette' src={require('../../photos/man-cycling.svg')} />} text='Faster than ' text2='Any other product' />
                <BlockComponent img={<img alt='palette' src={require('../../photos/mark-as-favorite-star.svg')} />} text='Simple Experience ' text2='of Product' />
            </Grid>
        </Grid>

    )
}


export default SecondaryTitle