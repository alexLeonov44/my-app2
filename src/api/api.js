import * as axios from 'axios';

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{'API-KEY':'04db4cf5-d605-4eca-b6f0-273f3f99895d'}
})

export const getAuthAPI =()=>{
    return instance(`auth/me`)
}


export const getUsersAPI =(currentPage,pageSize)=>{
    return instance(`users?page=${currentPage}&count=${pageSize}`)   
}
export const unfollowAPI =(id)=>{
    return instance.delete(`follow/${id}`)
}
export const followAPI =(id)=>{
    return instance.post(`follow/${id}`,{})
}
export const getProfileAPI =(userId)=>{
    return instance(`profile/` + userId)
}
export const getProfileStatusAPI =(userId)=>{
    return instance(`profile/status/` + userId)
}
export const updateStatusAPI =(status)=>{
    return instance.put(`profile/status/`,{status})
}
export const loginAPI =(email,password,rememberMe)=>{
    return instance.post(`auth/login`,{email,password,rememberMe})
}
export const logoutAPI =()=>{
    return instance.delete(`auth/login`)
}





