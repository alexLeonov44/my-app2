import { getProfileAPI, getProfileStatusAPI, updateStatusAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    postData: [
        { id: 1, message: 'hi first post', age: 23 },
        { id: 2, message: 'hi second post', age: 23 },
        { id: 3, message: 'its third post', age: 23 },
    ],
    newPostText: '',
    profile:null,
    status:''
}

const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return{
            ...state,
            newPostText: action.newText  //перезатираем данные сразу во время инициализвции копии!!!!!
            }
        case ADD_POST:
                let newPost = {
                    id: 4,
                    message: state.newPostText,
                    age: 2
                }
                let stateCopy = {...state,postData:[...state.postData]}   //быстрый способ скопировать обьект и вложенности
                stateCopy.postData.push(newPost)
                stateCopy.newPostText = ''
                return stateCopy                 //вернет копию state 
        case SET_USER_PROFILE:
            return {...state,profile:action.profile}     
        case SET_USER_STATUS:
            return {...state,status:action.status}     
        default:
            return state
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getProfile =(userId)=>{
    return(dispatch)=>{
        getProfileAPI(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
        
    }
}
export const getProfileStatus =(userId)=>{
    return(dispatch)=>{
        getProfileStatusAPI(userId).then(response => {
            dispatch(setUserStatus(response.data))
        })
        
    }
}
export const updateStatus =(status)=>{
    return (dispatch)=>{
        updateStatusAPI(status).then(response => { 
         if (response.data.resultCode === 0) {
             dispatch(setUserStatus(status))}

     })
    }
}

export default profileReduser
