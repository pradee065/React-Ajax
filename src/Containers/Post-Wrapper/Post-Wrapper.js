import React from 'react';
import PostTitle from '../../Components/Post-Title/Post-Title';
import PostDescrption from '../../Components/Post-Descrption/Post-Descrption';
import classes from './Post-Wrapper.module.css'

const postWrapper = (props) => {
    return(
        <li className={classes.Postwrapper}>
                    <PostTitle title={props.title}/>
                    <PostDescrption descrption={props.descrption} />
        </li>
    )
}

export default postWrapper;