import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

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
        color: '#696969',
        cursor: 'pointer'
    },
    secondary: {
        fontSize: '10px',
        fontFamily: 'FiraGO',
        color: '#bababa',
        padding: 0,
        margin: 0,
        cursor: 'pointer'
    }
});



function HeaderList(props) {
    const classes = useStyles();
    const text = props.text;
    const secondary = props.secondary;
    return (
        <div className={classes.root}>
            <Link className={classes.primaryText}>{text}</Link>
            <Link className={classes.secondary}>{secondary}</Link>
        </div>

    )
}


export default HeaderList