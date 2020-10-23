import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '60px',
        alignItems: 'flex-start'
    },
    primaryText: {
        fontSize: '14px',
        fontWeight: '800',
        fontFamily: 'FiraGO',
        padding: 0,
        margin: 0,
        color: '#696969'
    },
    secondary: {
        fontSize: '10px',
        fontFamily: 'FiraGO',
        color: '#bababa',
        padding: 0,
        margin: 0
    }
});



function HeaderList(props) {
    const classes = useStyles();
    const text = props.text;
    const secondary = props.secondary;
    return (
        <div className={classes.root}>
            <p className={classes.primaryText}>{text}</p>
            <p className={classes.secondary}>{secondary}</p>
        </div>

    )
}


export default HeaderList