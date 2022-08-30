import { defineStore } from 'pinia'
import { Auth } from './auth'
export const PublicStore = defineStore('public', {
    state: () => {
        return {
            userInfo: {}
        }
    },
    getters: {
        getUserInfo: (state) => {
            return state.userInfo
        }
    },
    actions: {
        setUserInfo(userInfo) {
            this.userInfo = userInfo
        },
        async setUserInfoToken(userInfo) {
            const authStore = Auth()
            let res = await authStore.setPower()
            if (res) {
                userInfo.authList = authStore.setPower
                this.userInfo = userInfo
                return true
            } else {
                return false
            }
        }
    }
})