import React, { Suspense } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
// import ProfileContainer from './Profile/ProfileContainer';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
// import UsersContainer from './Users/UsersContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './login/Login';
import { getAuth } from './Redux/auth-reduser'
import { initializeApp } from './Redux/app-reduser'
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './common/preloader/Preloader';
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'))



class App extends React.Component {

    componentDidMount() {
       this.props.initializeApp()   
      this.props.getAuth()
   }

  render() {

    return (
      <Suspense fallback={<Preloader/>}>
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
        </Suspense>
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
 
