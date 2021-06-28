/** 
 * @description route login
 */
 const routes = [{
        path: '/company-register',
        name: 'RegisterCompany',
        component: () => import ( /* webpackChunkName: "RegisterCompany" */ '../ui/RegisterCompany.vue'),
        title: 'RegisterCompany',
    },
    {
        path: '/company-list',
        name: 'ListCompany',
        component: () => import ( /* webpackChunkName: "ListCompany" */ '../ui/ListCompany.vue'),
        title: 'ListCompany',
    },
    {
        path: '/company-edit',
        name: 'EditCompany',
        component: () =>import ( /* webpackChunkName: "EditCompany" */ '../ui/EditCompany.vue'),
        title: 'EditCompany',
    },

]

export default routes