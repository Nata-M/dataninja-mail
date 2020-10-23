import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HeaderList from './HeaderList';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container: {
        height: '80px',
        width: '100%',
        padding: ' 16px 150px 16px 180px',
        alignItems: 'center',
        marginBottom: '40px',
        position: 'relative'
    },
    img: {
        position: 'absolute',
        marginTop: '900px',
        // marginLeft: '20px',
        width: '170px',
        height: '170px'
    },
    img2: {
        position: 'absolute',
        marginTop: '1000px',
        marginLeft: '230px',
        width: '84px',
        height: '85px'

    },
    img3: {
        position: 'absolute',
        marginTop: '700px',
        marginLeft: '1100px',
        width: '150px',
        height: '140px'
    },
    img4: {
        position: 'absolute',
        marginTop: '1030px',
        marginLeft: '880px',
        width: '150px',
        height: '140px'
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
        color: '#959595'
    },
    secondary: {
        fontSize: '10px',
        fontFamily: 'FiraGO',
        padding: 0,
        margin: 0,
        color: '#000000',
        fontWeight: '800'
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
        }
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '10px',
        marginRight: '50px'
    }
});



function Header() {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <img alt='ninja' className={classes.img} src={require('../../photos/ninja.png')} />
            <img alt='ninja' className={classes.img2} src={require('../../photos/ninja2.png')} />
            <img alt='ninja' className={classes.img3} src={require('../../photos/ninja3.png')} />
            <img alt='ninja' className={classes.img4} src={require('../../photos/ninja4.png')} />
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
                    <p className={classes.primary}>Dataninja Academy</p>
                    <p className={classes.secondary}>Soon</p>
                </div>
            </Grid>
            <Grid item >
                <Button className={classes.button}>Try Beta for Free</Button>
            </Grid>
        </Grid>
    )
}


export default Header