import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputBase } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '900px',
        margin: ' 32px auto',
        position: 'relative'
    },
    paragraph: {
        color: '#696969',
        fontFamily: 'FiraGO',
        lineHeight: '1.86',
        width: '100%',
        margin: '30px auto',
        fontSize: '14px',
        textIndent: '20px'
    },
    title: {
        fontSize: '50px',
        fontWeight: '900',
        color: '#151f85',
        lineHeight: '1.11'
    },
    inputStyle: {
        display: 'flex',
        alignItems: 'center',
        color: '#818181',
        backgroundColor: '#ffffff',
        // boxShadow: '0 2px 11px 0 rgba(0, 0, 0, 0.1)',
        border: 'none',
        borderRadius: '24px',
        width: '260px',
        padding: '8px 36px',
        maxHeight: '40px',
        boxShadow: '0 2px 11px 0 rgba(0, 0, 0, 0.1)'
    },
    img: {
        marginRight: '20px'
    },
    button: {
        borderRadius: '24px',
        backgroundColor: '#ff4e00',
        textTransform: 'none',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'FiraGO',
        padding: '8px 36px',
        marginLeft: '20px',
        fontWeight: 'bold',
        maxHeight: '40px',
        '&:hover': {
            background: '#ff4e00',
        }
    },
    container: {
        justifyContent: 'center',
        padding: '8px',
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: '120px',
        width: '780px',
        height: '530px',
        // background: 'linear-gradient(to right bottom, white, rgba(255,255,255,0.95), rgba(255,255,255,0.95), rgba(255,255,255,0.9), rgba(255,255,255,0.9), rgba(255,255,255,0.85), rgba(255,255,255,0.8) )',
        // backgroundImage: 'url("../../photos/dataninjapage.png")',
    },
    image: {
        width: '100%',
        height: '100%'

        // filter: 'opacity(30%)'
    },
    imgNinja: {
        position: 'absolute',
        marginTRight: '100px'
    },
    margin: {
        margin: '8px'
    },
});


function TitleBlock() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <img className={classes.imgNinja} src={require('../../photos/ninja.png')} /> */}
            <Typography className={classes.title}>Dataninja is the next generation <br /> online advertising tool</Typography>
            <Typography variant='body2' className={classes.paragraph}>   Comprised of Ads Management, User Tracking, Powerful built-in optimization tool,
            Simple CRM, Real-Time Reporting system, Website <br /> Builder and Communication/Funnel Builder,
            we aim to give companies one, easy solution to build powerful marketing campaigns and make <br />
                 their digital advertising profitable.</Typography>
            <Grid container className={classes.container}>
                <Grid item className={classes.inputStyle}>
                    <img className={classes.img} alt='mail' src={require('../../photos/mail.svg')} />
                    <InputBase inputProps={{ classes, color: '#818181' }} placeholder='Your mail' />
                </Grid>
                <Grid item>
                    <Button className={classes.button}>Contact Me</Button>
                </Grid>
                <Grid className={classes.imageContainer} item>
                    <img className={classes.image} alt='dataninja' src={require('../../photos/dataninjapage.png')} />
                </Grid>
            </Grid>
        </div>
    )
}


export default TitleBlock