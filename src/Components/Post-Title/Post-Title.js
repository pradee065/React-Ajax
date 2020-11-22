import React from 'react';
import classes from './Post-Title.module.css';

const postTitle = (props) => {
    return(
        <h1 className={classes.Check}>{props.title}</h1>
    )
}

export default postTitle;