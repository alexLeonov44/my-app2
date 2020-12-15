import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile,getProfile } from '../Redux/profile-reduser'
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {

     componentDidMount() {
         let userId = this.props.match.params.userId
         if(!userId){userId = 12745}
         this.props.getProfile(userId)
    }

    render() {
        // if(!this.props.isAuth)return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}   />
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
       
    }
}
let redirectComponent = withAuthRedirect(ProfileContainer)
 let WithUrlDataContainer = withRouter(redirectComponent)

export default connect(mapStateToProps, { setUserProfile,getProfile })(WithUrlDataContainer)
//{...this.props}
//store.getState().profilePage.profile