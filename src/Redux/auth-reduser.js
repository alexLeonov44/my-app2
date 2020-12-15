import { getAuthAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    Id:null ,
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
            isAuth:true
        }
            
        default:
            return state
    }

}


export const setUserData = (id,login,email) => ({ type: SET_USER_DATA,data:{id,login,email} })


export const getAuth =()=>{
    return(dispatch)=>{

        getAuthAPI().then(response => {  //кроссдоменная операция
            if (response.data.resultCode === 0) { 
              let {id,login,email} = response.data.data
              dispatch(setUserData(id,login,email))
 
             }
        })
    }
}

export default authReduser
