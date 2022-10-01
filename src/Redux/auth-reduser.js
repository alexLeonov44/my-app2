import { stopSubmit } from "redux-form"
import { getAuthAPI, getCapchaAPI, loginAPI, logoutAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPCHA_CUCCES = 'SET_CAPCHA_CUCCES'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    capcha: null
    // isFetching:false   

}

const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPCHA_CUCCES:
            return {
                ...state,
                ...action.data,
                ...action.payload,
                
            }

        default:
            return state
    }

}


export const setUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })  //is auth!!!!
export const setCapcha = (capcha) => ({ type: SET_USER_DATA,payload:{capcha} }) //упаковать в обьект данные пэйлоад capcha:capcha должны совпадать!!


export const getAuth = () => {
    return (dispatch) => {

        getAuthAPI().then(response => {  //кроссдоменная операция
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data
                dispatch(setUserData(id, login, email, true))

            }
        })
    }
}
export const login = (email, password, rememberMe = false,captcha) => {
    return (dispatch) => {
        loginAPI(email, password, rememberMe,captcha).then(response => {  //кроссдоменная операция, so then apply key
            if (response.data.resultCode === 0) {
                dispatch(getAuth(true))
            }
            if (response.data.resultCode === 10) {
                dispatch(getCapcha())
                let messages = response.data.messages[0]
                dispatch(stopSubmit('login', { _error: messages }))
            }
            else {

            }
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        logoutAPI().then(response => {  //кроссдоменная операция, so then apply key
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
                dispatch(getAuth())
            }
        })
    }
}
export const getCapcha = () => async (dispatch) => {
    let response = await getCapchaAPI()
    dispatch(setCapcha(response.data.url))  //в респонс обьект с данными в ПАРАМЕТРАХ ничего не прописываем

}


export default authReduser
