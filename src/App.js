import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
// import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() =>
            <Profile  />} />
          <Route path='/dialogs' render={() =>
            < DialogsContainer />} />
          {/* <Route path='/news' render={News} /> */}
          {/* <Route path='/music' render={Music} /> */}
          {/* <Route path='/setting' render={Setting} /> */}

        </div>
      </div>
    </BrowserRouter>
  )
}





export default App;
