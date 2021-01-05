import { getUsersAPI,unfollowAPI,followAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TO_USER_COUNT = 'SET_TO_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [
        //  { id: 1,photos:{small:null,large:null},followed:true, name:'alex',status:'handsome',location: {sity:'mogilew',country:'belarus'} },
        //  { id: 2,photos:{small:null,large:null},followed:true, name:'petra',status:'pretty well',location: {sity:'mogilew',country:'belarus'} },
        //  { id: 3,photos:{small:null,large:null},followed:true, name:'goose',status:'agly',location: {sity:'mogilew',country:'belarus'} },

    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TO_USER_COUNT:
            return { ...state, totalUsersCount: action.totalCount }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }

}

export const followComplete = (userId) => ({ type: FOLLOW, userId })
export const unfollowComplete = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setToUserCount = (totalCount) => ({ type: SET_TO_USER_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requiredUsers = (currentPage, pageSize) => {

    return (dispatch) => {
            dispatch(setCurrentPage(currentPage))
            dispatch(toggleIsFetching(true))
        getUsersAPI(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.data.items))
            dispatch(setToUserCount(response.data.totalCount))

        })
    }
}

export const unfollow = (id)=>{
    return (dispatch)=>{
        dispatch(toggleIsFollowingProgress(true,id))
        unfollowAPI(id).then(response => { if (response.data.resultCode === 0) {dispatch(unfollowComplete(id))}
        dispatch(toggleIsFollowingProgress(false,id))})
    }
}
export const follow = (id)=>{
    return (dispatch)=>{
        dispatch(toggleIsFollowingProgress(true,id))
        followAPI(id).then(response => { if (response.data.resultCode === 0) {dispatch(followComplete(id))}
        dispatch(toggleIsFollowingProgress(false,id))})
    }
}

export default usersReduser
