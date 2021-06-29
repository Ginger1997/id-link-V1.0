/**
 * @description route solution
 */
const routes = [{
    path: '/solution',
    name: 'Solution',
    component: () =>
        import ( '../ui/Solution.vue'),
    title: 'Solution',
},
]

export default routes