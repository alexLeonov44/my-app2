import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../Redux/profile-reduser'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let postData = props.state.getState().profilePage.postData
    let newPostText = props.state.getState().profilePage.newPostText

    let addPost = () => {
        props.dispatch(addPostActionCreator())  //в обьект добавляется ТИП - ADD_POST и переходим в функцию addPostAction Creator
    }
    let onPostChange = (text) => {
        props.dispatch(onPostChangeActionCreator(text))  //в обьект добавляется ТИП - UPDATE_NEW_POST_TEXT и переходим в функцию onPostChangeActionCreator
    }

    return (
        <MyPosts onPostChange={onPostChange} addPost={addPost} postData={postData} newPostText={newPostText} />

    )
}

export default MyPostsContainer