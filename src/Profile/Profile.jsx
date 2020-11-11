import React from 'react';
import MyPosts from './MyPost/MyPosts';
import MyPostsContainer from './MyPost/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPostsContainer  />

        </div>

    )
}

export default Profile