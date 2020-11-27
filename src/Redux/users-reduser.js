const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TO_USER_COUNT = 'SET_TO_USER_COUNT'

let initialState = {
    users: [
        //  { id: 1,photos:{small:null,large:null},followed:true, name:'alex',status:'handsome',location: {sity:'mogilew',country:'belarus'} },
        //  { id: 2,photos:{small:null,large:null},followed:true, name:'petra',status:'pretty well',location: {sity:'mogilew',country:'belarus'} },
        //  { id: 3,photos:{small:null,large:null},followed:true, name:'goose',status:'agly',location: {sity:'mogilew',country:'belarus'} },

        ],
    pageSize:100 ,
    totalUsersCount:0,
    currentPage:1   

}

const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return{
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u,followed:true}
                }
                return u
            })}
         
            
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u,followed:false}
                    }
                    return u
                })}

                case SET_USERS:
            return{ ...state,users: action.users}

                case SET_CURRENT_PAGE:
            return{ ...state,currentPage: action.currentPage}

                case SET_TO_USER_COUNT:
            return{ ...state,totalUsersCount: action.totalCount}
            
               
        default:
            return state
    }

}

export let followAC = (userId) => ({ type: FOLLOW,userId })
export let unfollowAC = (userId) => ({ type: UNFOLLOW,userId })
export let setUsersAC = (users) => ({ type: SET_USERS,users })
export let setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE,currentPage })
export let setToUserCountAC = (totalCount) => ({ type: SET_TO_USER_COUNT,totalCount })

export default usersReduser
