import {useAuthStore} from "~/store/auth";


// @ts-ignore

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();
    if (process.client) {
        const token = localStorage.getItem('access_token')
        if (token) {
            // @ts-ignore
            auth.fetchProfile().then(res => {
                return navigateTo(to.path)
            }).catch(err => {
                console.log(err)
                return abortNavigation()
            })
        } else {
            return navigateTo('/')
        }

    }

})
