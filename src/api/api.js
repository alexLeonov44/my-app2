import * as axios from 'axios';

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{'API-KEY':'04db4cf5-d605-4eca-b6f0-273f3f99895d'}
})


export const getUsers =(currentPage,pageSize)=>{
    return instance(`users?page=${currentPage}&count=${pageSize}`)
   
}
export const unFollow =(id)=>{
    return instance.delete(`follow/${id}`)
}
export const follow =(id)=>{
    return instance.post(`follow/${id}`,{})
}
export const getProfile =(userId)=>{
    return instance(`profile/` + userId)
}




