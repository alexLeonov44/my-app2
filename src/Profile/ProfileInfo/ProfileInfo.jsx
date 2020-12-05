import React from 'react';
import Preloader from '../../common/preloader/Preloader';

import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.content}>
            <div className={classes.HeadImage}>
                <img src="https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt='' />
            </div>
            <div className={classes.profilePhoto}>
                <img src={props.profile.photos.large} alt='' />
            </div>

            <div className={classes.descriptionBlock}>
                status " {props.profile.aboutMe} " <br />
                name {props.profile.fullName} <br />
                <div className={classes.job}>
                    {props.profile.lookingForAJob && props.profile.lookingForAJobDescription}
                </div>
                <div className={classes.contacts}>
                 {props.profile.contacts.facebook}<br />
                 {props.profile.contacts.website}<br />
                 {props.profile.contacts.vk}<br />
                 {props.profile.contacts.twitter}<br />
                 {props.profile.contacts.instagram}<br />
                 {props.profile.contacts.youTube}<br />
                 {props.profile.contacts.github}<br />
                 {props.profile.contacts.mainLink}
                </div>
            </div>



        </div>

    )
}

export default ProfileInfo