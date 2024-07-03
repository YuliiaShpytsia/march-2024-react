import axios, {AxiosResponse} from "axios";
import {UsersResponseModel} from "../models/UsersResponseModel";
import {PostsResponseModel} from "../models/PostsResponseModel";


let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
})

const getAllUsers = ():Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get('/users')
}



const getAllPostsOfUser = (id:number):Promise<AxiosResponse<PostsResponseModel>> =>{
    return axiosInstance.get(`/posts/user/` + id)
}


export {
    getAllPostsOfUser,
    getAllUsers
}