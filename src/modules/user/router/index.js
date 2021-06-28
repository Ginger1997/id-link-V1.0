/** 
 * @description route UserRegister
 */
 const routes = [{
    path: '/user-register',
    name: 'UserRegister',
    component: () =>
        import ( /* webpackChunkName: "UserRegister" */ '../ui/UserRegister.vue'),
    title: 'UserRegister',
}, ]

export default routes