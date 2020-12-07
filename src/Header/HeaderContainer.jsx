import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../Redux/auth-reduser'
import Header from './Header';
import * as axios from 'axios';
import Preloader from '../common/preloader/Preloader'

class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {  //кроссдоменная операция
            if (response.data.resultCode === 0) { 
              let {id,login,email} = response.data.data
              this.props.setUserData(id,login,email)
 
             }
        })
    }
    render() {

        return <>
            <Header {...this.props} />
        </>
    }
}




const mapStateToProps = (state) => {
    return {
     isAuth:state.auth.isAuth,
     login:state.auth.login
    }
}



export default connect(mapStateToProps,{setUserData})(HeaderContainer)  