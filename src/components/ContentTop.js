import React from 'react';
import TitleBlock from './content/TitleBlock';
import { makeStyles } from '@material-ui/core/styles';
import SecondaryTitle from './content/SecondaryTitle';

const useStyles = makeStyles({
    root: {
        position: 'relative'
    },
    // img: {
    //     position: 'absolute',
    //     marginTop: '150px',
    //     marginRight: '100px'
    // }
});

function ContentTop() {
    const classes = useStyles();
    return (
        <div className={classes.root} container>
            {/* <img className={classes.img} src={require('../photos/ninja.png')} /> */}
            <TitleBlock />
            <SecondaryTitle />
        </div>

    )
}


export default ContentTop