import { combineReducers, createStore } from 'redux'
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import usersReduser from './users-reduser'

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser
})

let store = createStore(redusers)
window.store = store

export default store