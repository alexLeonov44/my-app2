import { combineReducers, createStore } from 'redux'
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import usersReduser from './users-reduser'
import authReduser  from './auth-reduser'

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    auth:authReduser
})

let store = createStore(redusers)
window.store = store

export default store