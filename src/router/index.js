import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

import { prefix } from "@/config/prefix"

//views
import Home from '@/views/Home.vue'
import Contact from '@/modules/welcome/contact/router'
import Services from '@/modules/welcome/services/router'
import RegisterCompany from '@/modules/company/router'
import Login from '../modules/auth/login/router'
import Ecommerce from '@/modules/ecommerce/router'
import User from '@/modules/user/router'
import PasswordReset from '@/modules/auth/forgotPassword/router'
import Account from '@/modules/account/router'

Vue.use(VueRouter)

const pre = prefix;

/** 
 * @description vue-router array all
 */
const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },

    ...Contact,
    ...Services,
    ...Login,
    ...Ecommerce,
    ...PasswordReset,


    {
        path: pre,
        name: 'AppLayout',
        component: () =>
            import ('@/views/AppLayout.vue'),
        meta: { requireAuth: true },
        children: [
            ...RegisterCompany,
            ...User,
            ...Account,
        ],
    },
]

/** 
 * @description vue-router instance
 */
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

/** 
 * @description beforeEach, query the token-auth protected 
 * @param {object} to Route: the target Route Object being navigated to.
 * @param {object} from the current route being navigated away from.
 * @param {Function} next this function must be called to resolve the hook. The action depends on the arguments provided to next
 */
router.beforeEach((to, from, next) => {
    const routeAuth = to.matched.some(record => record.meta.requireAuth)
        //si routeAuth es true y  getToken es null user not auth // else user auth
    routeAuth && store.getters.getToken === null ? next({ path: '/login' }) : next()
})

export default router