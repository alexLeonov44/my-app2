import React from 'react';
import classes from './Header.module.css';

const  Header = () => {
    return (
        <header className={classes.header}>
       <div>
        <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt=''/>
        </div>
     </header> 
    )
}

export default Header