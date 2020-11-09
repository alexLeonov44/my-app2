import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let newPostText = props.newPostText
    let postsElement = props.postData.map(p => <Post message={p.message} age={p.age} />)

    let addPost = () => {
        debugger
        props.addPost()
    }
    let onPostChange = (event) => {
        let text = event.target.value
        props.onPostChange(text)
    }

    return (
        <div className={classes.myPosts} >
            <h3>My posts</h3>
            <div>
                <textarea className={classes.textarea} onChange={onPostChange} value={newPostText} placeholder='enter your post' />
                <br />
                <button className={classes.button} onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}></div>
            {postsElement}
        </div>

    )
}

export default MyPosts