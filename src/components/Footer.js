import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
        background: "#151a22",
        paddingBottom: 50,
        paddingTop: 90,
        marginTop: 50
    },
    info: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        color: "#2c7df0",
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 2.29,
    },
    h1: {
        fontSize: 54,
        color: "#ffffff",
        fontWeight: 900,
        lineHeight: 1.11,
        textAlign: 'center'
    },
    button: {
        fontFamily: 'FiraGO',
        background: '#2c7df0',
        color: "#ffffff",
        borderRadius: 19,
        fontSize: 12,
        textTransform: 'none',
        lineHeight: 2.29,
        fontWeight: 800,
        width: 158,
        height: 38,
        marginTop: 20,
        '&:hover': {
            background: '#2c7df0',
        }
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        marginTop: 90
    },
    nested_grid: {
        boxSizing: "border-box",
        borderTop: "1px solid #2e3641",
        display: 'flex',
        color: '#ffffff',
        lineHeight: 2.29,
        fontSize: 14,
        paddingTop: 50,
        justifyContent: 'center'
    },
    link: {
        fontSize: 14,
        fontWeight: 800,
        lineHeight: 2.29,
        color: '#ffffff',
        marginRight: 60,
    },
    _container: {
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',

    },
    icons: {
        marginRight: '12px'
    },
    // iconStyle: {
    //     color: "red",
    //     backgroundColor: '#ffffff',
    //     borderRadius: '50%',
    //     width: '20px',
    //     height: '20px',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }

}))
function Footer() {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.footer}>
            <Typography className={classes.info}>
                That’s not all:
            </Typography>

            <Typography variant="h1" className={classes.h1}>
                Be amazed by our product?
            </Typography>

            <Grid item xs={12} className={classes._container}>
                <Button className={classes.button} variant="filled" color="primary">
                    Try Beta For Free
                    </Button>
            </Grid>

            <Grid item xs={12} className={classes.grid}>
                <Grid item xs={12} className={classes.nested_grid}>
                    <Grid item xs={3} style={{ textAlign: 'right' }}>
                        Dataninja © 2019-20
                        </Grid>
                    <Grid item xs={7} className={classes._container}>
                        <Link href="#" className={classes.link}>Product Story</Link>
                        <Link href="#" className={classes.link}>About us</Link>
                        <Link href="#" className={classes.link}>Contact</Link>
                    </Grid>
                    <Grid item xs={2} className={classes.icon}>
                        <div className={classes.icons} >
                            <i className="fa fa-facebook" style={{ color: "#000000", backgroundColor: '#ffffff', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} ></i>
                        </div>
                        <div className={classes.icons} >
                            <i className="fa fa-twitter" style={{ color: "#000000", backgroundColor: '#ffffff', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></i>
                        </div>
                        <div className={classes.icons} >
                            <i className="fa fa-instagram" style={{ color: "#ffffff", backgroundColor: '#151a22', fontSize: '24px', borderRadius: '50 % ', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></i>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}


export default Footer