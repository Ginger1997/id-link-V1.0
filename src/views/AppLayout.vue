<template>
    <div class="container-scroller">
        <nav-bar/>

        <div class="container-fluid page-body-wrapper">
            <nav-fixed/>

            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="col-12">                            
                        <template v-if="currentRouteName==srtTem">
                            <dashboard/>
                        </template>
                        <template v-else>
                            <router-view/>
                        </template>
                    </div>

                    <footer-layaout/>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/layout/NavBar.vue';
import NavFixed from '../components/layout/NavFixed.vue';
import FooterLayaout from '../components/layout/FooterLayaout.vue';
import Dashboard from '../modules/dashboard/ui/Dashboard.vue';

export default {
    /** 
     * @property component name
     */
    name: "AppLayout",
    /** 
     * @property component initialization
     */
    components: {
        NavBar,
        NavFixed,
        FooterLayaout,
        Dashboard,
    },
    /** 
     * @property computed component properties
     */
    computed: {
        /** 
         * @description gets the current route 
         */
        currentRouteName() {
            return this.$route.name;
        }
    },
    /** 
     * @property data, initialization of component variables
     */ 
    data() {
        return {
            srtTem : 'AppLayout'
        }
    }, 
    /** 
     * @property component methods
     */
    methods:{},
    /** 
     * @property created, calls the following functions when loading the component
    */
    created:function(){},
};
</script>

<style scoped></style>
