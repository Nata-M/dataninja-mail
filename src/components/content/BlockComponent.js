import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
        width: '16%',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '30%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '20%',
        },
    },
    div: {
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        backgroundColor: 'rgb(255,78,0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            width: '40px',
            height: '40px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '30px',
            height: '30px'
        }
    },
    break: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    text: {
        fontFamily: 'FiraGO',
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#000000',
        marginTop: '20px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        },
    }
});

function BlockComponent(props) {
    const text = props.text;
    const text2 = props.text2;
    const img = props.img;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.div}>
                {img}
                {/* <img alt='palette' src={require('../../photos/painter-palette.svg')} /> */}
            </div>
            <Typography className={classes.text}>{text}<br className={classes.break} />{text2}</Typography>
        </div>
    )
}


export default BlockComponent