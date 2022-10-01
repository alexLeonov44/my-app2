import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import usersReduser from './users-reduser'
import authReduser  from './auth-reduser'
import thunkMiddleware  from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReduser from './app-reduser'

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    auth:authReduser,
    form:formReducer,
    app:appReduser
})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(  applyMiddleware(thunkMiddleware)))
 store.subscribe(()=> console.log('change'))



export default store