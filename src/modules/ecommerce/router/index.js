/** 
 * @description route Ecommerce
 */
 const routes = [{
    path: '/ecommerce-payments',
    name: 'Ecommerce',
    component: () =>
        import ( /* webpackChunkName: "Ecommerce" */ '../ui/Ecommerce.vue'),
    title: 'Ecommerce',
}, ]

export default routes