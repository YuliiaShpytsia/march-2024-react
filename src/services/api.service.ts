import axios from "axios";
import {baseUrl, urls} from "../constants/Urls";
import {IResponse} from "../models/IResponse";

const axiosInstant = axios.create({
    baseURL: baseUrl,
    headers:{}
})

const characterService = {
    getAll: async (page:string)=>{
        const axiosResponse = await axiosInstant.get<IResponse>(urls.character.all,
            {
                params:{
                    page:page
                }
            })
        return axiosResponse;
    }
}

export {
    characterService,
    axiosInstant
}