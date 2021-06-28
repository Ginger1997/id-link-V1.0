/** 
 * @description route Contact
 */
const routes = [{
    path: '/contact',
    name: 'Contact',
    component: () =>
        import ( /* webpackChunkName: "Contact" */ '../ui/Contact.vue'),
    title: 'Contact',
}, ]

export default routes