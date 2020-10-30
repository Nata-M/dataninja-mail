import React from 'react';
import ContentTop from './ContentTop';
import ContentBottom from './ContentBottom';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    },
    img: {
        position: 'absolute',
        left: '8%',
        top: '7%',
        // marginTop: '250px',
        // marginLeft: '8%',
        width: '170px',
        height: '170px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    img2: {
        position: 'absolute',
        left: '26%',
        top: '9.5%',
        // marginTop: '350px',
        // marginLeft: '25%',
        width: '84px',
        height: '85px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    img3: {
        position: 'absolute',
        right: '9%',
        top: '4%',
        // marginTop: '200px',
        // marginLeft: '82%',
        width: '150px',
        height: '140px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    img4: {
        position: 'absolute',
        right: '19.5%',
        top: '9.2%',
        width: '150px',
        height: '140px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
});

function Content() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img alt='ninja' className={classes.img} src={require('../photos/ninja.png')} />
            <img alt='ninja' className={classes.img2} src={require('../photos/ninja2.png')} />
            <img alt='ninja' className={classes.img3} src={require('../photos/ninja3.png')} />
            <img alt='ninja' className={classes.img4} src={require('../photos/ninja4.png')} />
            <ContentTop />
            <ContentBottom />
        </div>
    )
}


export default Content