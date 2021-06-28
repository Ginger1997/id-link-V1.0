/** 
 * @description route login
 */
const routes = [
  {
    path: '/login',
    name: 'Login',    
    component: () => import(/* webpackChunkName: "Login" */ '../ui/Login.vue'),
    title: 'Login',
  },
]

export default routes