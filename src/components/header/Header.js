import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HeaderList from './HeaderList';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


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
    container: {
        height: '80px',
        width: '100%',
        alignItems: 'center',
        marginBottom: '40px',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },

    logo: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: '900',
        fontFamily: 'FiraGO',
        marginRight: '30px',
    },
    paragraph: {
        margin: 0,
        padding: 0,
        paddingRight: '30px',
        borderRight: '1px solid #c4c4c4',
        cursor: 'default'
    },
    listItem: {
        display: 'flex',
        marginRight: '50px',
        alignItems: 'center'
    },
    primary: {
        fontSize: '14px',
        fontWeight: '800',
        fontFamily: 'FiraGO',
        padding: 0,
        margin: 0,
        color: '#959595',
        cursor: 'pointer'
    },
    secondary: {
        fontSize: '10px',
        fontFamily: 'FiraGO',
        padding: 0,
        margin: 0,
        color: '#000000',
        fontWeight: '800',
        cursor: 'pointer'
    },
    button: {
        textTransform: 'none',
        fontFamily: 'FiraGO',
        borderRadius: '24px',
        backgroundColor: '#2c7df0',
        color: '#ffffff',
        fontSize: '14px',
        padding: '8px 24px',
        fontWeight: 'bold',
        '&:hover': {
            background: '#2c7df0',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
            padding: '8px 12px'
        },
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '10px',
        marginRight: '50px',
        [theme.breakpoints.down('md')]: {
            marginRight: '30px'
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '16px'
        },
    }
});



function Header() {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid item className={classes.logo}>
                <img style={{ marginRight: '10px' }} alt='ninja' src={require('../../photos/dataninja.svg')} />
                <p className={classes.paragraph}>DataNinja</p>
            </Grid>
            <Grid item><HeaderList text='Home' secondary='Learn More' /></Grid>
            <Grid item><HeaderList text='Product Story' secondary='Timeline' /></Grid>
            <Grid item><HeaderList text='About us' secondary='Team' /></Grid>
            <Grid item><HeaderList text='Contact' secondary='Get in Touch' /></Grid>
            <Grid className={classes.listItem} item>
                <img alt='graduation-hat' src={require('../../photos/graduation-hat.svg')} />
                <div className={classes.div}>
                    <Link className={classes.primary}>Dataninja Academy</Link>
                    <Link className={classes.secondary}>Soon</Link>
                </div>
            </Grid>
            <Grid item >
                <Button className={classes.button}>Try Beta for Free</Button>
            </Grid>
        </Grid>
    )
}


export default Header