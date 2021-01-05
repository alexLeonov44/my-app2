import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, } from '../../Redux/profile-reduser'
import MyPosts from './MyPosts';

 
const mapStateToProps =(state)=>{
   return{
    postData: state.profilePage.postData,
   }
}

const mapDispatchToProps =(dispatch)=>{
    return{
         addPost: (addPostData) =>  dispatch(addPostActionCreator(addPostData)), 
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)  //зашит внутрь consumer и discriber ,локальные перерисовки ,убир rerender

export default MyPostsContainer