<template>
    <!-- <div class="sidebar"> -->
        <nav class="sidebar mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <router-link  v-if="$store.getters['configurationWell/getObjWellSelect'].well_name" :to="{name: ''}" class="well-name nav-link">
                        <i class="fas fa-gopuram pl-2 pr-2"></i>
                        <p>
                            <b>{{$store.getters['configurationWell/getObjWellSelect'].well_name}} <span class="badge badge-success">Active</span></b>
                        </p>
                    </router-link>
                    <router-link v-else :to="{name: ''}" class="well-name nav-link">
                        <i class="fas fa-gopuram pl-2 pr-2"></i>                        
                        <p>Well Name  <span class="badge badge-danger">Deactivated</span></p>
                    </router-link>
                </li> 

                <li class="nav-item" v-for="data in arrayMenuForUser" :key="data.id">
                    <router-link :to="{name:data.route}" class="nav-link">
                        <i :class="data.icon"></i>
                        <!-- <i class="nav-icon fas fa-tachometer-alt"></i> -->
                        <p>
                            {{data.description}}
                            <template v-if="data.route!=strWell"><i class="right fas fa-angle-left"></i></template>
                        </p>
                    </router-link>
                    <ul class="nav nav-treeview">
                        <li class="nav-item" v-for="data2 in data.submenu" :key="data2.id">
                            <router-link :to="{name:data2.route}" class="nav-link">
                                <i :class="data2.icon"></i>
                                <p>{{data2.description}}</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    <!-- </div> -->
</template>

<script>
import {getHttpAuth} from '@/utils/http'
import {toastMessage} from '@/utils/baseFuntions'
import {apiMenuUser} from './uriApi'

export default {
    /** 
     * @property component name
     */
    name:'Sidebar',
    //inject:['reload'],
    /** 
     * @property props, custom attributes that the component has.
     */
    // props: {
    //     arrayMenuForUser:{
    //         type: Array,
    //         default() {}
    //     }
    // },
    /** 
     * @property data, initialization of component variables
     */ 
    data() {
        return { 
            arrayMenuForUser:[],
            strWell:'GeneralInformation' //Create Well
        }
    }, 
    /** 
     * @property component methods
     */
    methods:{
        /** 
         * @description loads the menu according to the user id of the logged in user
         */
        async getMenuForUser () {
            const strUrl= `${apiMenuUser}${this.$store.getters.getUserID}`
            const objLoader = this.$loading.show();
            const response = await getHttpAuth(strUrl)
            objLoader.hide()       
            if(response.codError == 1){  
                this.arrayMenuForUser = response.result
            }else{
                console.log(response);
                this.$toast.error(response.message, toastMessage());
            }
        },
    },
    /** 
     * @property mounted, calls the following functions when loading the component
    */
    created:function(){        
        this.getMenuForUser() 
    },  

};
</script>

<style scoped>
.sidebar{
    /*  position: fixed; */
    overflow: scroll;
}

.well-name {
    cursor: auto;
    background-color: inherit !important; 
    color: #fff !important;
}
</style>

