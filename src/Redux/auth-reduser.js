const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    Id:null ,
    login:null,
    email:null,
    isAuth:false,
    isFetching:false   

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


export let setUserData = (id,login,email) => ({ type: SET_USER_DATA,data:{id,login,email} })

export default authReduser
