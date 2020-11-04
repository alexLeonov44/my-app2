import { combineReducers, createStore } from 'redux'
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser
})

let store = createStore(redusers)

export default store