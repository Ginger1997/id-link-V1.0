<template>
    <div>
        <Header></Header>
            <div class="form-gap">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-md-offset-4">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <div class="text-center">
                                        <h3><i class="fa fa-lock fa-4x"></i></h3>
                                        <h2 class="text-center">Forgot Password?</h2>
                                        <p>You can reset your password here.</p>
                                        <div class="panel-body">
                                            <ValidationObserver v-slot="{ handleSubmit }">
                                                <form @submit.prevent="handleSubmit(resetPassword)">
                                                    <ValidationProvider :name="objLabels.email" :rules="objRules.email" v-slot="{ errors }">
                                                        <div class="form-group">
                                                            <label for="email">Email address</label>
                                                            <input v-model="email" type="email" class="form-control" id="email" placeholder="Email" />
                                                            <span>{{ errors[0] }}</span>
                                                        </div>
                                                    </ValidationProvider>

                                                    <center>
                                                        <div v-if="strErrorResponse" class="form-group form check ml-4">
                                                            <label class="form-check-label" for="error">{{strErrorResponse}}</label>
                                                        </div>
                                                    </center>
                                                
                                                    <div>
                                                        <button type="submit" class="btn btn-primary mr-2 mt-4">Send Email</button>
                                                    </div>
                                                </form>
                                            </ValidationObserver>

                                            <!-- <form id="register-form" role="form" autocomplete="off" class="form">
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input v-model="email" id="email" name="email" placeholder="Email Address" class="form-control" type="email" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit" />
                                                </div>

                                                <input type="hidden" class="hide" name="token" id="token" value="" />
                                            </form> -->
                                        </div>
                                    </div>
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
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Footer/Footer'

import {apiUserResetpasswordUser} from '../uriApi'
import {postHttp} from '@/utils/httpDefault'
export default {
    /** 
     * @property component name
     */
    name:'ForgotPassword',

    components:{
        Header,
        Footer,
    },

    data() {
        return {
            formData:{},
            objRules:{},
            objLabels:{},

            email:'1sdsssa@dsdas.com',
            strErrorResponse:'',
        }
    },
    
    methods:{
        async resetPassword () {
            this.strErrorResponse = ''

            const data = {
                email: this.email
            }

            const objLoader = this.$loading.show();
            const response = await postHttp(apiUserResetpasswordUser, data)
            objLoader.hide()           
            if(response.data.code == 0){
                this.$router.push({ name: 'Login'})
            }else {
               response.data.detail ? this.strErrorResponse = response.data.detail : console.log(response);
            }
        },
    },
    mounted(){},
    created(){}
    
}
</script>


<style scoped>
.form-gap {
    margin-top: 100px;
}
</style>