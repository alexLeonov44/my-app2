import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers,setCurrentPage, setToUserCount,toggleIsFetching,toggleIsFollowingProgress } from '../Redux/users-reduser'
import Users from './Users';
import Preloader from '../common/preloader/Preloader'
import { getUsers } from '../api/api';

class UsersContainerAPI extends React.Component {

    componentDidMount() {
            this.props.toggleIsFetching(true)
        getUsers(this.props.currentPage,this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setToUserCount(response.data.totalCount)
        
        })
    }

    onPageChanged = (pageNumber)=>{
            this.props.setCurrentPage(pageNumber)
            this.props.toggleIsFetching(true)
       getUsers(pageNumber,this.props.pageSize).then(response => {
           this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)   
        })
        
    }

    render() {
        
        return <>
        {this.props.isFetching && <Preloader/> }
         <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}  
                      follow={this.props.follow}  
                      unfollow={this.props.unfollow}
                      toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                      followingInProgress={this.props.followingInProgress} />
                                                   
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



export default connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setToUserCount,toggleIsFetching,toggleIsFollowingProgress})(UsersContainerAPI)  