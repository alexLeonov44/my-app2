import { stopSubmit } from "redux-form"
import { getAuthAPI, loginAPI, logoutAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id:null ,
    login:null,
    email:null,
    isAuth:false,
    // isFetching:false   

}

const authReduser = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:
            return{
            ...state,
            ...action.data,
        }
            
        default:
            return state
    }

}


export const setUserData = (id,login,email,isAuth) => ({ type: SET_USER_DATA,data:{id,login,email,isAuth} })  //is auth!!!!


export const getAuth =()=>{
    return(dispatch)=>{

        getAuthAPI().then(response => {  //кроссдоменная операция
            if (response.data.resultCode === 0) { 
              let {id,login,email} = response.data.data
              dispatch(setUserData(id,login,email,true))
 
             }
        })
    }
}
export const login =(email,password,rememberMe = false)=>{
    return(dispatch)=>{
    
        loginAPI(email,password,rememberMe).then(response => {  //кроссдоменная операция, so then apply key
            if (response.data.resultCode === 0) { 
              dispatch(getAuth(true))
             } else{
                 let messages = response.data.messages[0]
                 dispatch(stopSubmit('login',{_error:messages}))
             }
        })
    }
}
export const logout =()=>{
    return(dispatch)=>{
        logoutAPI().then(response => {  //кроссдоменная операция, so then apply key
            if (response.data.resultCode === 0) { 
              dispatch(setUserData(null,null,null,false))
              dispatch(getAuth())
             }
        })
    }
}

export default authReduser
