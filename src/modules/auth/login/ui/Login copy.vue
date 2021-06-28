<template>
    <div>
        <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
            <div class="container">
                <div class="card login-card">
                    <div class="row no-gutters">
                        <div class="col-md-5">
                            <img src="@/assets/img/img-login.jpg" alt="login" class="login-card-img" />
                        </div>
                        <div class="col-md-7">
                            <div class="card-body" style="text-align: center;">
                                <div class="brand-wrapper">
                                    <img src="@/assets/img/strata-d.jpeg" alt="logo" class="logo" />
                                </div>
                                <p class="login-card-description">Sign into your account</p>
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <form @submit.prevent="handleSubmit(loginAuthenticate)" autocomplete="off">
                                        <div>
                                            <div class="form-group">
                                                <ValidationProvider :name="objUserLoginName.username" :rules="objUserLoginRule.username" v-slot="{ errors }">
                                                    <label for="emailAddress" class="sr-only">Email Address</label>
                                                    <input v-model="objParams.username" type="text" name="emailAddress" id="emailAddress" class="form-control" placeholder="Username" />
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="form-group mb-4">
                                                <ValidationProvider :name="objUserLoginName.password" :rules="objUserLoginRule.password" v-slot="{ errors }">
                                                    <label for="password" class="sr-only">Password</label>
                                                    <input v-model="objParams.password" type="password" name="password" id="password" class="form-control" placeholder="Password" @keyup.enter="loginAuthenticate()" />
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div v-if="bolError" class="alert alert-danger" role="alert">
                                                <span>{{strErrorMsj}}</span>
                                            </div>
                                            <button type="submit" class="btn-primary col-md-12 mb-2">Log In</button>
                                        </div>                                        
                                        <a href="#!" class="forgot-password-link">Forgot password?</a>
                                    </form>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>


<script>
import {postHttp} from '@/utils/httpDefault'
import {userLoginRule, userLoginName} from '../../../user/model/userRules'
import {apiAuthenticate} from '../uriApi'
import {mapActions} from 'vuex'

export default {
    /** 
     * @property component name
     */
    name:'Login',
    /** 
     * @property data, initialization of component variables
     */ 
    data() {
        return {
            objParams:{},

            objUserLoginRule:{},
            objUserLoginName:{},

            strErrorMsj:'',
            bolError: false,           
        }
    },
    /** 
     * @property component methods
     */
    methods: {  
        ...mapActions(['getAuthenticateDataUser', 'readToken']),
        /** 
        * @property user authentication method
        */  
        async loginAuthenticate () {
            const objLoader = this.$loading.show();
            const response = await postHttp(apiAuthenticate, this.objParams)
            objLoader.hide()
            if(response.codError == 1){
                //getAuthenticateDataUser action to store the id and token of the user in the vuex store
                this.getAuthenticateDataUser(response.result)

                //save token in localStorage
                localStorage.setItem('keyToken', response.result.idToken)

                //read token function will get the auth token from local storage and store it in the main store.
                this.readToken()

                this.$router.push({ name: 'AppLayout'})
            }else{
                this.bolError = true;
                this.strErrorMsj = response.message
            }
        },
    },
    /** 
     * @property mounted, calls the following functions when loading the component
    */ 
    mounted:function(){
        this.objUserLoginRule = userLoginRule
        this.objUserLoginName = userLoginName
    }
}
</script>

<style scope>

img {
    vertical-align: middle;
    border-style: none;
}

@media (prefers-reduced-motion: reduce) {
    .btn {
        transition: none;
    }
}

@media print {
    *,
    ::after,
    ::before {
        text-shadow: none !important;
        box-shadow: none !important;
    }
    a:not(.btn) {
        text-decoration: underline;
    }
    img {
        page-break-inside: avoid;
    }
    p {
        orphans: 3;
        widows: 3;
    }
    .container {
        min-width: 1200px !important;
    }
}
.brand-wrapper {
    margin-bottom: 19px;
}
.brand-wrapper .logo {
    height: 37px;
}
.login-card {
    border: 0;
    border-radius: 27.5px;
    /* box-shadow:8px -10px 6px #B82601;  */
    box-shadow: 0 10px 30px 0 rgba(172, 168, 168, 0.43);
    overflow: hidden;
}

.login-card-img {
    border-radius: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}
.login-card .card-body {
    padding: 85px 60px 60px;
}
@media (max-width: 960px) {
    .login-card .card-body {
        padding: 35px 24px;
    }
}
.login-card-description {
    font-size: 25px;
    color: #000;
    font-weight: normal;
    margin-bottom: 23px;
}
.login-card form {
    max-width: 330px;
    margin: 0 auto;
   /*  width:80%  */
}
.login-card .form-control {
    border: 1px solid #d5dae2;
    padding: 15px 25px;
    margin-bottom: 20px;
    min-height: 45px;
    font-size: 13px;
    line-height: 15;
    font-weight: normal;
}
.login-card .form-control::-webkit-input-placeholder {
    color: #919aa3;
}
.login-card .form-control::-moz-placeholder {
    color: #919aa3;
}
.login-card .form-control:-ms-input-placeholder {
    color: #919aa3;
}
.login-card .form-control::-ms-input-placeholder {
    color: #919aa3;
}
.login-card .form-control::placeholder {
    color: #919aa3;
}
.login-card .login-btn {
    padding: 13px 20px 12px;
    background-color: #000;
    border-radius: 4px;
    font-size: 17px;
    font-weight: bold;
    line-height: 20px;
    color: #fff;
    margin-bottom: 24px;
}
.login-card .login-btn:hover {
    border: 1px solid #000;
    background-color: transparent;
    color: #000;
}
.login-card .forgot-password-link {
    font-size: 14px;
    color: #919aa3;
    margin-bottom: 12px;
}
.login-card-footer-text {
    font-size: 16px;
    color: #0d2366;
    margin-bottom: 60px;
}
@media (max-width: 767px) {
    .login-card-footer-text {
        margin-bottom: 24px;
    }
}
.login-card-footer-nav a {
    font-size: 14px;
    color: #919aa3;
}
.footer-link {
    position: absolute;
    bottom: 1rem;
    text-align: center;
    width: 100%;
}

@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl{
        max-width: 960px;
    }
}
</style>