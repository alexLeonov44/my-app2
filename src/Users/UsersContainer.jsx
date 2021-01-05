import React from 'react';
import { connect } from 'react-redux';
import { followComplete, unfollowComplete, setUsers,setCurrentPage, setToUserCount,toggleIsFetching,
         toggleIsFollowingProgress,requiredUsers,unfollow,follow } from '../Redux/users-reduser'
import Users from './Users';
import Preloader from '../common/preloader/Preloader'
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers,getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress } from '../Redux/users-selectors';

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.requiredUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber)=>{
        this.props.requiredUsers(pageNumber, this.props.pageSize) 
    }
     
    render() {
        
        return <>
        {this.props.isFetching && <Preloader/> }
         <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}  
                      followComplete={this.props.followComplete}  
                      unfollowComplete={this.props.unfollowComplete}
                      toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                      followingInProgress={this.props.followingInProgress}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow} />
                                                   
        </>
    }
   }




const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }
}


export default compose( connect(mapStateToProps,
    {followComplete,unfollowComplete,setUsers,setCurrentPage,
    setToUserCount,toggleIsFetching,toggleIsFollowingProgress,requiredUsers,unfollow,follow}),
    withAuthRedirect)(UsersContainerAPI)
