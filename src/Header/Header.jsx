import React from 'react';
import classes from './Header.module.css';
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom';

const  Header = (props) => {
   
    return (
        <header className={classes.header}>
       
        <img src={logo} alt=''/>
        
        <div className={classes.loginBlock}>{
            props.isAuth ? props.login 
           : <NavLink to={'/login'}>  
                login
            </NavLink>

         } </div>
     </header> 
    )
}

export default Header