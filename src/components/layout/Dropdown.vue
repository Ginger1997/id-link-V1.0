<template>
    <div>
        <li class="dropdown">
            <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                <img class="navpicture" :src="srtSetIMG" />
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" :to="{name:'MyAccount'}">My account</router-link>
                <router-link class="dropdown-item" :to="{name:'Settings'}">Settings</router-link>
                <router-link class="dropdown-item" :to="{name:'Support'}">Support</router-link>
                <div class="dropdown-divider"></div>
                <li class="dropdown-item" @click="logout">Log Out</li>
                <!--  <router-link class="dropdown-item" @click="logout">Log Out</router-link> -->
                <!--  <router-link class="dropdown-item" @click="logout" :to="{name:'Login'}">Log Out</router-link>  -->
            </div>
        </li>
    </div>
</template>

<script>
import {setSwallWarning, toastMessage} from '@/utils/baseFuntions'
import {getImgUser} from '@/utils/imgFuntionsj'
import {getHttpAuth} from '@/utils/http'
import {apiUserGet} from '@/modules/user/uriApi'

export default {
    /** 
     * @property component name
     */
    name: "Dropdown",
    /** 
     * @property data, initialization of component variables
     */ 
    data() {
        return {
            srtSetIMG:'',
        }
    },
    /** 
     * @property component methods
     */
    methods: {
        /** 
         * @description removes the user's authentication token and logs the user out. 
         */
        logout: function () {
            this.$swal(
                setSwallWarning(`<h4>¿Confirm Log Out?</h4>`, '')
            ).then((result) => {
                if (result.isConfirmed) {   
                    //localStorage.removeItem('keyToken')
                    localStorage.clear();
                    setTimeout( () => this.$router.push({ name: "Login" }), 1000);
                }
            });
        },
        /** 
         * @description loads the status bar image
         */
        async loadImgUser(){
            this.srtSetIMG = await getImgUser();
        },

        /** 
        * @description query the info of the authenticated user by means of the user id
        */        
        async getUserAuthId () {     
            const strUrl = `${apiUserGet}/${this.$store.getters.getUserID}`           
            const objLoader = this.$loading.show();
            const response = await getHttpAuth(strUrl)
            objLoader.hide()
            if(response.codError == 1){
                this.$store.dispatch('userAuth/getAuthenticateDataUser', response.result)
                this.loadImgUser();
            }else{
                console.error(response);
                this.$toast.error('An error occurred when querying user information', toastMessage());
            }
        },
    }, 
    /** 
     * @property mounted property calls the following functions when loading the component
     */
    mounted:function(){   
        this.getUserAuthId();       
    },
};
</script>

<style scoped>
    .navpicture {
        max-width: 120%;
        max-height: 120%;
        border-radius: 100%;
    }
</style>
