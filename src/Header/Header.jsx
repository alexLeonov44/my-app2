import React from 'react';
import classes from './Header.module.css';
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    state = {
        isFetching: false
    }
    openLogout = () => {
        this.state.isFetching ?  this.setState({ isFetching: false }) : this.setState({ isFetching: true })
    }
    logout =()=>{
        this.props.logout()
    }
    render() {
        return (
            <header className={classes.header}>

                <img src={logo} alt='' />

                <div className={classes.loginBlock}>{
                    this.props.isAuth ? <button  onClick={this.openLogout}>{this.props.login}</button>
                    
                        : <NavLink to={'/login'}> login </NavLink>

                }  {this.state.isFetching && this.props.isAuth && <div><button onClick={this.logout}>Logout</button></div>}
                </div>

            </header>
        )
    }
}

export default Header