import { instance } from '../instance';
import { usersTypes } from "../../redux/users";



export const _users = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<usersTypes.usersDataType>(`users?page=${currentPage}&count=${pageSize}`).then((res) => res.data)
    },
    unfollow(itemId: string | number | undefined) {
        return instance.delete<usersTypes.followUnfollowType>(`follow/${itemId}`).then(res => res.data)
    },
    follow(itemId: string | number | undefined) {
        return instance.post<usersTypes.followUnfollowType>(`follow/${itemId}`).then(res => res.data)
    }
}