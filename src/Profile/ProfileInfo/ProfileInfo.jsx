import React from 'react';

import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <div className={classes.image}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt=''/>
            </div>

            <div>
                <p>ava + description</p>
        </div>

          

        </div>

    )
}

export default ProfileInfo