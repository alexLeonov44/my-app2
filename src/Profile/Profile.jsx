import React from 'react';
import MyPosts from './MyPost/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts state={props.state} dispatch={props.dispatch}  />

        </div>

    )
}

export default Profile