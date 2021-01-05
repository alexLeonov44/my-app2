import { getAuth } from "./auth-reduser"

const SET_INITIALIZED_APP = 'SET_INITIALIZED_APP'

let initialState = {
    initialized: false

}

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_APP:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }

}


export const initializedSucces = () => ({ type: SET_INITIALIZED_APP }) 


export const initializeApp = () => (dispatch) => {
        let promise = dispatch(getAuth())

        Promise.all([promise])
            .then(() => {
            dispatch(initializedSucces())
        })
}


export default appReduser
