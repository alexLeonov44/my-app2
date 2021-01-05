import { getProfileAPI, getProfileStatusAPI, updateStatusAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    postData: [
        { id: 1, message: 'hi first post', age: 23 },
        { id: 2, message: 'hi second post', age: 23 },
        { id: 3, message: 'its third post', age: 23 },
    ],
    profile:null,
    status:''
}

const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
                let newPost = {
                    id: 4,
                    message: action.formData.postText,
                    age: 2
                }
                let stateCopy = {...state,postData:[...state.postData]}   //быстрый способ скопировать обьект и вложенности
                stateCopy.postData.push(newPost)
                action.formData.postText = ''
                return stateCopy                 //вернет копию state 
        case SET_USER_PROFILE:
            return {...state,profile:action.profile}     
        case SET_USER_STATUS:
            return {...state,status:action.status}     
        default:
            return state
    }

}

export const addPostActionCreator = (formData) => ({ type: ADD_POST,formData })
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
