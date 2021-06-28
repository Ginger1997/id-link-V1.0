/** 
 * @description route UserRegister
 */
const routes = [{
        path: '/user-register',
        name: 'UserRegister',
        component: () =>
            import ( /* webpackChunkName: "UserRegister" */ '../ui/UserRegister.vue'),
        title: 'UserRegister',
    },
    {
        path: '/user-list',
        name: 'UserList',
        component: () =>
            import ( /* webpackChunkName: "UserList" */ '../ui/UserList.vue'),
        title: 'UserList',
    },


]

export default routes