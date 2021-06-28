/** 
 * @description route login
 */
 const routes = [{
    path: '/account-profile',
    name: 'Profile',
    component: () =>
        import ( /* webpackChunkName: "Profile" */ '../ui/Profile.vue'),
    title: 'Profile',
}, {
    path: '/profile-edit',
    name: 'EditProfile',
    component: () =>
        import ( /* webpackChunkName: "EditProfile" */ '../ui/EditProfile.vue'),
    title: 'EditProfile',
},

]

export default routes