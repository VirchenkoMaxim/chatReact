import { profileTypes } from './../../redux/profile';
import { instance } from '../instance';

type setProfileDataType = {
    aboutMe: string
    lookingForAJobDescription: boolean
    fullName: string
}
export const _profile = {
    getProfile(userId: string | undefined) {
        return instance.get<profileTypes.ProfileType>(`profile/` + userId).then(res => res.data)
    },
    setProfileData({ aboutMe, lookingForAJobDescription, fullName, ...data }: profileTypes.ProfileType) {
        return instance.put(`profile`, { aboutMe, lookingForAJobDescription, fullName, ...data }).then(res => res.data)
    },
    getStatus(userId: string | undefined) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status })
    },
    savePhoto(file: string) {
        const formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
}