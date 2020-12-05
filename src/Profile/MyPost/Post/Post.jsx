import React from 'react';
import classes from './Post.module.css';



const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src="https://cdn.statically.io/img/www.celebrities-contact.com//wp-content/uploads/2019/07/ava-max-email-phone-contact-581.jpg" alt='image' />
            <div>{props.message}</div>
                   age:{props.age}
                   



        </div>


    )
}

export default Post