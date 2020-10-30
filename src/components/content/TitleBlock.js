import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { InputBase } from '@material-ui/core';

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
        margin: 'auto',
        marginTop: '50px',
        [theme.breakpoints.down('md')]: {
            marginTop: '28px'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '18px'
        },

    },
    paragraph: {
        color: '#696969',
        fontFamily: 'FiraGO',
        lineHeight: '1.86',
        width: '62%',
        margin: '30px auto',
        fontSize: '14px',
        textIndent: '20px',
        [theme.breakpoints.down('md')]: {
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            textIndent: '0',
            textAlign: 'justify',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            margin: '15px auto'
        },
    },
    break: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    title: {
        width: '100%',
        fontSize: '50px',
        fontWeight: '900',
        color: '#151f85',
        lineHeight: '1.11',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            fontSize: '36px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    inputStyles: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        border: 'none',
        borderRadius: '24px',
        width: '330px',
        padding: '8px 36px',
        maxHeight: '44px',
        boxShadow: '0 2px 11px 0 rgba(0, 0, 0, 0.1)',
        // [theme.breakpoints.down('md')]: {
        //     fontSize: '12px',
        //     padding: '8px 16px',
        //     maxHeight: '30px',
        // },
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            width: '90%',
            marginBottom: '12px',
            padding: '8px 16px',
            maxHeight: '30px',
        },
    },
    img: {
        marginRight: '20px',
        // [theme.breakpoints.down('xs')]: {
        //     width: '15%',
        //     height: '7%'
        // },
    },
    button: {
        borderRadius: '24px',
        backgroundColor: '#ff4e00',
        textTransform: 'none',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'FiraGO',
        padding: '12px 36px',
        marginLeft: '20px',
        fontWeight: 'bold',
        maxHeight: '44px',
        '&:hover': {
            background: '#ff4e00',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px',
            margin: 0,
            maxHeight: '30px'
        },
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        padding: '8px',
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: '120px',
        margin: 'auto',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    image: {
        width: '780px',
        height: '530px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    imgNinja: {
        position: 'absolute',
        marginTRight: '100px'
    },
    margin: {
        margin: '8px'
    },
    inputStyle: {
        color: '#818181',
        '& ::placeholder': {
            fontFamily: 'FiraGO',
            opacity: 1,
            color: '#818181',
            fontWeight: 'bold',
        },
        [theme.breakpoints.down('xs')]: {
            '& ::placeholder': {
                fontSize: '12px'
            },
        },
    },
});


function TitleBlock() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            {/* <img className={classes.imgNinja} src={require('../../photos/ninja.png')} /> */}
            <Typography className={classes.title}>Dataninja is the next generation <br /> online advertising tool</Typography>
            <Typography variant='body2' className={classes.paragraph}>   Comprised of Ads Management, User Tracking, Powerful built-in optimization tool,
            Simple CRM, Real-Time Reporting system, Website Builder and Communication/Funnel Builder,
            we aim to give companies one, easy solution to build powerful marketing campaigns and make their digital advertising profitable.</Typography>
            <Grid container className={classes.container}>
                <Grid item className={classes.inputStyles}>
                    <img className={classes.img} alt='mail' src={require('../../photos/mail.svg')} />
                    <InputBase className={classes.inputStyle} label='test' placeholder='Your mail' />
                </Grid>
                <Grid item >
                    <Button className={classes.button}>Contact Me</Button>
                </Grid>
            </Grid>
            <Grid className={classes.imageContainer} item>
                <img className={classes.image} alt='dataninja' src={require('../../photos/dataninjapage.png')} />
            </Grid>
        </Grid>
    )
}


export default TitleBlock