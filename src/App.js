import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ProfileContainer from './Profile/ProfileContainer';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './login/Login';
import { getAuth } from './Redux/auth-reduser'
import { initializeApp } from './Redux/app-reduser'
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './common/preloader/Preloader';



class App extends React.Component {

    componentDidMount() {
       this.props.initializeApp()    // В НВЧАЛЕ ВСЕГДА РЕДИРЕКТ НА ЛОГИН  НЕ УСПЕВАЕТ ПРИДТИ ISAUTH
      // this.props.getAuth()
   }
   
  render() {
    
    if (!this.props.initialized) {
       return <Preloader/>
    }

    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'> 
           <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

            <Route path='/dialogs' render={() => < DialogsContainer />} />

            <Route path='/users' render={() => <UsersContainer />} />

            <Route path='/login' render={() => <Login />} />
            {/* <Route path='/news' render={News} /> */}
            {/* <Route path='/music' render={Music} /> */}
            {/* <Route path='/setting' render={Setting} /> */}
          </div>
        </div>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
          
  }
}

export default compose(
  withRouter,
   connect(mapStateToProps, {getAuth,initializeApp} ))(App)
 
