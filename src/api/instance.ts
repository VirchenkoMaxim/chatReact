import axios, { AxiosInstance } from "axios";

export const instance: AxiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "136e40ef-7894-41a6-86dc-b69ad7121619"
    }
})
