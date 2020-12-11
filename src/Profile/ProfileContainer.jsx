import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../Redux/profile-reduser'
import * as axios from 'axios';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../api/api';


class ProfileContainer extends React.Component {

     componentDidMount() {
         let userId = this.props.match.params.userId
         if(!userId){userId = 12745}
         getProfile(userId).then(response => {
             this.props.setUserProfile(response.data)
         })
    }

    render() {
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

 let WithUrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainer)
//{...this.props}
//store.getState().profilePage.profile