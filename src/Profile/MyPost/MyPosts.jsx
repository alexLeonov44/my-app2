import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { lengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../../common/formsControl/formsControl';

let maxLength10 = lengthCreator(10)

const PostForm = (props) => {   // in props resive - handleSubmit
    return (
              <form onSubmit = {props.handleSubmit}> {/* prevent defuult упаковка в обьект  и передача данных в onSubmit*/}
                <div>
                    <Field  className={classes.textarea}  placeholder={'postText'} name={'postText'}
                     component={Textarea} validate={[required,maxLength10]} /> 
                </div>
                <div>
                     <button className={classes.button} >add post</button> {/* в форме auto submit */}
                </div>
            </form>

    )
}


const PostReduxForm = reduxForm({   //связывает с редьюсером
    form:'post'  // после создания форм в редьюсере создается подъобьект логин
})(PostForm)


const MyPosts = (props) => {

    const onAddPost = (addPostData)=>{  //придут сюда все значения из форм !! через submit!
        console.log(addPostData) // отобразим все данные!
        props.addPost(addPostData)
    }
    
    let postsElement = props.postData.map(p => <Post key={p.id} message={p.message} age={p.age} />)

    return (
        <div className={classes.myPosts} >
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={onAddPost} />
            </div>
            <div className={classes.posts}></div>
            {postsElement}
            
        </div>

    )
}

export default MyPosts