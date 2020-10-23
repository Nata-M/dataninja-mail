import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '650px',
        margin: 'auto'
    },
    div: {
        width: '94.6px',
        marginTop: 50,
        marginBottom: 60,
        position: 'relative',
        left: "45%"
    },
    main_txt: {
        fontFamily: 'FiraGO',
        height: 22,
        fontSize: 26,
        fontWeight: 900,
        linehHeight: 1.38,
        color: "#454545",
        display: "flex",
        justifyContent: 'center',
        alignItem: 'center',
    },
    main_color: {
        color: "#ff4e00",
        marginRight: 10,
        marginLeft: 10
    },
    txt: {
        textAlign: 'center',
        height: 71,
        fontSize: 14,
        lineHeight: 1.86,
        color: "#696969",
        marginTop: 20,
        marginBottom: 50,
        display: "flex",
        justifyContent: 'center',
        alignItem: 'center',
        width: '90%'

    },
    built: {
        height: 56,
        fontSize: 24,
        fontWeight: 900,
        linehHeight: 1.38,
        color: "#454545",
        width: 500,
        width: 604,
        textAlign: "center"
    },
    media: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
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
    _container: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

function ContentBottom() {
    const classes = useStyles();

    return (
        <List className={classes.root}>

            <Divider className={classes.div} />
            <Typography className={classes.main_txt}>
                From One Platform in All networks -
            <span className={classes.main_color}> Just 1 Click </span>
            </Typography>
            <Grid item className={classes._container}>
                <Typography className={classes.txt}>
                    Comprised of Ads Management, User Tracking, Powerful built-in
                    optimization tool, Simple CRM, Real-Time Reporting system, Website
                    Builder and Communication/Funnel Builder, we aim to give companies one,
                    easy solution to build powerful marketing campaigns and make their
                    digital advertising profitable.
            </Typography>
            </Grid>
            <div className={classes.media}>
                <img src='/screen/screen_1.JPG' />
            </div>


            <Divider className={classes.div} />
            <Typography className={classes.main_txt}>
                Combined Real-Time Reporting for
            <span className={classes.main_color}> All Networks </span>
            </Typography>
            <Grid item className={classes._container}>
                <Typography className={classes.txt}>
                    Comprised of Ads Management, User Tracking, Powerful built-in
                    optimization tool, Simple CRM, Real-Time Reporting system, Website
                    Builder and Communication/Funnel Builder, we aim to give companies one,
                    easy solution to build powerful marketing campaigns and make their
                    digital advertising profitable.
            </Typography>
            </Grid>
            <div className={classes.media}>
                <img src='/screen/screen_2.JPG' />
            </div>


            <Divider className={classes.div} />
            <Grid item className={classes._container}>
                <Typography className={classes.built}>
                    Built-In Automatic Audiences and <br />
                    <span className={classes.main_color}>  Auto Retargeting  </span>
            in Many Networks
          </Typography>
            </Grid>
            <Grid item className={classes._container}>
                <Typography className={classes.txt}>
                    Comprised of Ads Management, User Tracking, Powerful built-in
                    optimization tool, Simple CRM, Real-Time Reporting system, Website
                    Builder and Communication/Funnel Builder, we aim to give companies one,
                    easy solution to build powerful marketing campaigns and make their
                    digital advertising profitable.
            </Typography>
            </Grid>
            <div className={classes.media}>
                <img src='/screen/screen_3.JPG' />
            </div>


            <Divider className={classes.div} />
            <Typography className={classes.main_txt}>
                <span className={classes.main_color}> Exact Profit </span>Per Advertisement In Real-Time
          </Typography>
            <Grid item className={classes._container}>
                <Typography className={classes.txt}>
                    Comprised of Ads Management, User Tracking, Powerful built-in
                    optimization tool, Simple CRM, Real-Time Reporting system, Website
                    Builder and Communication/Funnel Builder, we aim to give companies one,
                    easy solution to build powerful marketing campaigns and make their
                    digital advertising profitable.
            </Typography>
            </Grid>
            <div className={classes.media}>
                <img src='/screen/screen_4.JPG' />
            </div>


            <Divider className={classes.div} />
            <Typography className={classes.info}>
                Recommendations From People who spent $1M. on Digital Advertising Yearly
           </Typography>
            <Typography className={classes.main_txt}>
                The Most <span className={classes.main_color}>Optimized</span>Advertisements
           </Typography>
            <Grid item className={classes._container}>
                <Typography className={classes.txt}>
                    Comprised of Ads Management, User Tracking, Powerful built-in
                    optimization tool, Simple CRM, Real-Time Reporting system, Website
                    Builder and Communication/Funnel Builder, we aim to give companies one,
                    easy solution to build powerful marketing campaigns and make their
                    digital advertising profitable.
            </Typography>
            </Grid>
            <div className={classes.media}>
                <img src='/screen/screen_5.JPG' />
            </div>

        </List>
    );
}


export default ContentBottom