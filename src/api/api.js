import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "136e40ef-7894-41a6-86dc-b69ad7121619"
    }
})
export const usersAPI = {
    getUsers(curentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${curentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(itemId) {
        return instance.delete(`follow/${itemId}`)

    },
    follow(itemId) {
        return instance.post(`follow/${itemId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}