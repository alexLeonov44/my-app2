import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import ProfileContainer from './Profile/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() =><ProfileContainer  />} />

          <Route path='/dialogs' render={() =>< DialogsContainer  />} />

          <Route path='/users' render={() => <UsersContainer/>  } />
          {/* <Route path='/news' render={News} /> */}
          {/* <Route path='/music' render={Music} /> */}
          {/* <Route path='/setting' render={Setting} /> */}

        </div>
      </div>
    </BrowserRouter>
  )
}





export default App;
