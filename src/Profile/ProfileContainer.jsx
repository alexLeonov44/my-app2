import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile,getProfile,getProfileStatus ,updateStatus} from '../Redux/profile-reduser'
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

     componentDidMount() {
         let userId = this.props.match.params.userId
         if(!userId){userId = 12745}
         this.props.getProfile(userId)
         this.props.getProfileStatus(userId)
    }

    render() {
        // if(!this.props.isAuth)return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}  />
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status
       
    }
}


export default compose(connect(mapStateToProps, { setUserProfile,getProfile,getProfileStatus,updateStatus}),withRouter,)(ProfileContainer)
//withAuthRedirect