import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile,getProfile,getProfileStatus ,updateStatus,savePhoto,saveProfile} from '../Redux/profile-reduser'
import Profile from './Profile';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    
     refreshProfile(){
        let userId = this.props.match.params.userId
        if(!userId){userId = this.props.authenticationUserId}
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
     }
     componentDidMount() {
        this.refreshProfile() 
    }
    componentDidUpdate(prevProps,prevState){
    
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        } 
    }
    render() {
        //  if(!this.props.isAuth)return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                 updateStatus={this.props.updateStatus} isOwner={this.props.match.params.userId} savePhoto={this.props.savePhoto} 
                 saveProfile={this.props.saveProfile}/>
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status,
        authenticationUserId:state.auth.id,     
    }
}


export default compose(
    connect(mapStateToProps, 
    { setUserProfile,getProfile,getProfileStatus,updateStatus,savePhoto,saveProfile}),withRouter,withAuthRedirect)(ProfileContainer)
