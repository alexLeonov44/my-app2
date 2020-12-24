import React from 'react';
import { connect } from 'react-redux';
import { followComplete, unfollowComplete, setUsers,setCurrentPage, setToUserCount,toggleIsFetching,toggleIsFollowingProgress,getUsers,unfollow,follow } from '../Redux/users-reduser'
import Users from './Users';
import Preloader from '../common/preloader/Preloader'
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber)=>{
        this.props.getUsers(pageNumber, this.props.pageSize) 
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}


export default compose( connect(mapStateToProps,
    {followComplete,unfollowComplete,setUsers,setCurrentPage,
    setToUserCount,toggleIsFetching,toggleIsFollowingProgress,getUsers,unfollow,follow}),
    withAuthRedirect)(UsersContainerAPI)
