/** 
 * @description route Services
 */
const routes = [{
    path: '/services',
    name: 'Services',
    component: () =>
        import ( /* webpackChunkName: "Services" */ '../ui/Services.vue'),
    title: 'Services',
}, ]

export default routes