import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC,setCurrentPageAC, setToUserCountAC,toggleIsFetchingAC } from '../Redux/users-reduser'
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../common/preloader/Preloader'

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setToUserCount(response.data.totalCount)
        
        })
    }

    onPageChanged = (pageNumber)=>{
            this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
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
                      unfollow={this.props.unfollow}   />
        </>
    }
   }




const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setToUserCount: (totalCount) => {
            dispatch(setToUserCountAC(totalCount))
        },
        toggleIsFetching: (toggleIsFetching) => {
            dispatch(toggleIsFetchingAC(toggleIsFetching))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)  