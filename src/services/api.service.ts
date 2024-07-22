import axios, {AxiosResponse} from "axios";
import {UsersResponseModel} from "../models/UsersResponseModel";
import {PostResponseModel} from "../models/PostResponseModel";


let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
})

const getAllUsers = ():Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get('/users')
}

const getPosts = (id: number):Promise<AxiosResponse<PostResponseModel>> => {
    return axiosInstance.get(`/users/${id}/posts`)
}



export {
    getAllUsers,
    getPosts
}