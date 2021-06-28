/** 
 * @description route login
 */
 const routes = [{
    path: '/password-reset',
    name: 'ForgotPassword',
    component: () =>
        import ( /* webpackChunkName: "ForgotPassword" */ '../ui/ForgotPassword.vue'),
    title: 'ForgotPassword',
}, ]

export default routes