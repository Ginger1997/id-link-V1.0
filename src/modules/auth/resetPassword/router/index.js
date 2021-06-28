/** 
 * @description route login
 */
 const routes = [{
    path: '/password-changes',
    name: 'ResetPassword',
    component: () =>
        import ( /* webpackChunkName: "ResetPassword" */ '../ui/ResetPassword.vue'),
    title: 'ResetPassword',
}, ]

export default routes