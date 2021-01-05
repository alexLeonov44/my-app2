import React from 'react';
import { connect } from 'react-redux';
import { logout} from '../Redux/auth-reduser'
import HeaderWithHook from './HeaderWithHook';

class HeaderContainer extends React.Component {

    render() {
    //    this.props.getAuth()
        return <>
            <HeaderWithHook {...this.props}  />
        </>
    }
}




const mapStateToProps = (state) => {
    return {
     isAuth:state.auth.isAuth,
     login:state.auth.login
    }
}



export default connect(mapStateToProps,{logout})(HeaderContainer)  