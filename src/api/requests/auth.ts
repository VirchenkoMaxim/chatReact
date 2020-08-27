import { instance } from '../instance';
import { authTypes } from "../../redux/auth";


export const _auth = {
    me() {
        return instance.get<authTypes.authMeType>(`auth/me`).then(res => res.data)
    },
    login(email: string | null, password: string | null, rememberMe: boolean = false) {
        return instance.post<authTypes.LoginLogoutType>(`auth/login`, { email, password, rememberMe }).then(res => res.data)
    },
    logout() {
        return instance.delete<authTypes.LoginLogoutType>(`auth/login`).then(res => res.data)
    }
}