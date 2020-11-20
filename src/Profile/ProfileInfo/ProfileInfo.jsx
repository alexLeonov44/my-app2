import React from 'react';

import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <div className={classes.image}>
                <img src="https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt=''/>
            </div>

            <div>
                <p>ava + description</p>
        </div>

          

        </div>

    )
}

export default ProfileInfo