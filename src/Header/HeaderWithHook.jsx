import React, { useState } from 'react';
import classes from './Header.module.css';
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom';

const HeaderWithHook =(props)=> {

    let [isFetching,setIsFetching] = useState(false)

   
   let openLogout = () => {
        isFetching ?  setIsFetching(false) :  setIsFetching(true)
    }
   let logout =()=>{
        props.logout()
    }
    
        return (
            <header className={classes.header}>

                <img src={logo} className={classes.logo} alt='' />

                <div className={classes.loginBlock}>{
                    
                    props.isAuth ? <button  onClick={openLogout}>{props.login}</button>

                        : <NavLink to={'/login'}> login </NavLink>

                }  {isFetching && props.isAuth && <div><button onClick={logout}>Logout</button></div>}
                </div>

            </header>
        )
}

export default HeaderWithHook