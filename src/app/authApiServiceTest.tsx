import { API } from "../api"
import useAuthStore from "./authStore"

export const signIn = async (params) => {
    try {
        const obj = {
            username: params.username,
            password: params.password,
        }
        const respone = await API.post('auth/login', obj)
        const user = await respone.data
        useAuthStore.getState().updatedUserData(user.data)
    } catch (error) {
        console.log('Error During Login authApiServiceTest', error)
    }
}