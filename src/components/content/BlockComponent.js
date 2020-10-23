import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    div: {
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        backgroundColor: 'rgb(255,78,0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'FiraGO',
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#000000',
        marginTop: '20px'
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
            <Typography className={classes.text}>{text}<br />{text2}</Typography>
        </div>
    )
}


export default BlockComponent