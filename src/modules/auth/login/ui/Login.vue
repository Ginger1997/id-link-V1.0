<template>
    <div >
        <Header></Header>
        <div class="container mt-5">
        <p>hola</p>
        <div class="content-wrapper mt-5">
            <div class="row">
            <div class="col-md-6 grid-margin stretch-card mt-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Login</h4>
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(login)">
                                <ValidationProvider :name="objLabels.email" :rules="objRules.email" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="email">Email address</label>
                                        <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="Email" />
                                        <span>{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>

                                <ValidationProvider :name="objLabels.password" :rules="objRules.password" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input v-model="formData.password" type="password" class="form-control" id="password" placeholder="Password" />
                                        <span>{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>

                                <center>
                                    <div v-if="strErrorResponse" class="form-group form check ml-4">
                                        <label class="form-check-label" for="error">{{strErrorResponse}}</label>
                                    </div>
                                </center>

                                <div class="form-group form check ml-4">
                                    <input type="checkbox" id="showpassword" class="form-check-input" @click="toggleShowPassword" v-model="formData.showpassword" />
                                    <label class="form-check-label" for="showpassword">Show Password</label>
                                </div>
                                <div>
                                    <router-link :to="{name:'ForgotPassword'}">Forgot your password?</router-link><br />
                                    <button type="submit" class="btn btn-primary mr-2 mt-4">Submit</button>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
            <div class="col-md-6 grid-margin stretch-card mt-4">
                <div class="card">
                    <div class="card-body">
                        <p>image</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
        <Footer></Footer>
    </div>
</template>


<script>
import {objLoginRules, objLabelLogin} from '../model/loginModel'
import {apiAuthenticate} from '../uriApi'
import {postHttp} from '@/utils/httpDefault'
import {mapActions} from 'vuex';
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Footer/Footer'

export default {
  name: 'Login',

    components:{
        Header,
        Footer,
    },

  data: () => ({
    formData: {
      showpassword:false,
    },

    objRules:{},
    objLabels:{},
    
    strErrorResponse:'',
  }),

  computed: { },

  methods: {
    ...mapActions(['readToken']),

    async login () {
        this.strErrorResponse = ''

        const objLoader = this.$loading.show();
        const response = await postHttp(apiAuthenticate, this.formData)
        objLoader.hide()
    console.log(response);
       /*  if(response.status===200){
            //save token in localStorage
            localStorage.setItem('keyToken', response.data.jwt)

            //read token function will get the auth token from local storage and store it in the main store.
            this.readToken()

            console.log('get', this.$store.getters.getToken);

            //redirect
            //this.$router.push({ name: 'AppLayout'})
        }else{
            this.strErrorResponse = response.data.detail
        } */
    },
    toggleShowPassword(){
      var show =document.getElementById('password')
      if(this.showpassword==false){
        this.showpassword=true
        show.type="password"
      }
      else{
        this.showpassword=false
        show.type="text"
      }
    }    
  },
  created() {
    this.formData = {
        email: "dev_team_2@inreservoir.com",
        password: "bSMRVvE3"
    }
    this.objRules = objLoginRules
    this.objLabels = objLabelLogin
  }

}
</script>