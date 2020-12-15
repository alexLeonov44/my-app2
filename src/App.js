import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ProfileContainer from './Profile/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './login/Login';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() =><ProfileContainer  />} />

          <Route path='/dialogs' render={() =>< DialogsContainer  />} />

          <Route path='/users' render={() => <UsersContainer/>  } />
          
          <Route path='/login' render={() => <Login/>  } />
          {/* <Route path='/news' render={News} /> */}
          {/* <Route path='/music' render={Music} /> */}
          {/* <Route path='/setting' render={Setting} /> */}

        </div>
      </div>
    </BrowserRouter>
  )
}





export default App;
