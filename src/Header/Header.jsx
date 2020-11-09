import React from 'react';
import classes from './Header.module.css';
import logo from '../logo.svg'

const  Header = () => {
    return (
        <header className={classes.header}>
       <div>
        <img src={logo} alt=''/>
        </div>
     </header> 
    )
}

export default Header