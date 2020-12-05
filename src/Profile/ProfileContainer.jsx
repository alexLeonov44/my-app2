import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../Redux/profile-reduser'
import * as axios from 'axios';
import Profile from './Profile';


class ProfileContainer extends React.Component {

     componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
             this.props.setUserProfile(response.data)
         })
    }

    render() {
        return (
            <div>
                <Profile  profile={this.props.profile}   />
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
//{...this.props}
//store.getState().profilePage.profile