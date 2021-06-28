<template>
<div class="container" >
 <div class="col-12 grid-margin">
    <div class="card">
    <div class="card-body">
        <h1 style="text-align: center;">REGISTER USER</h1>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form class="mt" @submit.prevent="handleSubmit(register_user)" autocomplete="off">
                <div>
                    <h4 class="mb-4">Company Information</h4>
                </div>
                <div class="row">
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="rol" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="idRol">Rol <span class="text-danger">*</span></label>
                                <input v-model="objparam.idRol" id="idRol" type="text" class="form-control" placeholder="Rol"  />
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="company name" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="rol">Company Name <span class="text-danger">*</span></label>
                                <input v-model="objparam.company_name" id="company_name" type="text" class="form-control" placeholder="Company Name"  />
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="work area" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="rol">Work Area <span class="text-danger">*</span></label>
                                <input v-model="objparam.work_area" id="work_area" type="text" class="form-control" placeholder="Work Area" />
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="department" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="departament">Work Area <span class="text-danger">*</span></label>
                                <input v-model="objparam.departament" id="departament" type="text" class="form-control" placeholder="Departament"/>
                                <span>{{ errors[0] }}</span>
                            </div>                           
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="position" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="position">Position <span class="text-danger">*</span></label>
                                <input v-model="objparam.position" id="position" type="text" class="form-control" placeholder="Position" />
                                <span>{{ errors[0] }}</span>
                            </div>                             
                        </ValidationProvider>
                    </div>
                </div>
                <div>
                    <h4 class="mb-4">PERSONAL INFORMATION</h4>
                </div>
                <div class="row">
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="first name" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="name">First Name <span class="text-danger">*</span></label>
                                <input v-model="objparam.name" id="name" type="text" class="form-control"  placeholder="First Name" />
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="middle name" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="middle_name">Middle Name <span class="text-danger">*</span></label>
                                <input v-model="objparam.middle_name"  id="middle_name" type="text" class="form-control" placeholder="Middle Name" />
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="last name" rules="required|alpha" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="last_name">Last Name <span class="text-danger">*</span></label>
                                <input v-model="objparam.last_name" id="last_name" type="text" class="form-control"  placeholder="Last Name"  />
                                <span>{{ errors[0] }}</span>
                            </div>        
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="phone number" rules="required|numeric" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="phone_number">Phone Number <span class="text-danger">*</span></label>
                                <input  v-model="objparam.phone_number" id="phone_number" type="text" class="form-control" placeholder="Phone Number" />
                                <span>{{ errors[0] }}</span>
                            </div>                             
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="birthday" rules="required" v-slot="{ errors }">
                            <div class="form-group"> 
                                <label for="birthday">Birthday <span class="text-danger">*</span></label>
                                <input  v-model="objparam.birthday" id="birthday" type="date" class="form-control" placeholder="Birthday" />
                                <span>{{ errors[0] }}</span>
                            </div> 
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="email">Email <span class="text-danger">*</span></label>
                                 <input v-model="objparam.email" id="email" type="email" class="form-control" placeholder="Email"  />
                                <span>{{ errors[0] }}</span>
                            </div> 
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit" class="btn btn-primary btn-sg">SAVE</button>
                </div>
            </form>
        </ValidationObserver>
    </div>
    </div>
   </div>
</div>
</template>


<script>
import {apiUserRegisterUser} from '../uriApi'
import {postHttpAuth} from '@/utils/http'

export default {
    data(){
        return{
            objparam:{
                idRol:'rol',
                company_name:'company_name',
                work_area: 'work_area',
                departament: 'departament',
                position:'position',
                name: 'name',
                middle_name: 'middle_name',
                last_name: 'last',
                service: 'service',
                birthday: '2021-06-23',
                email: 'email@email.com',
                phone_number:'123',
            }
        }
    },
    methods:{
        /**
         * @description
         */
        async register_user(){
            this.strErrorResponse = ''

            const objLoader = this.$loading.show();
            const response = await postHttpAuth(apiUserRegisterUser, this.formData)
            objLoader.hide()
            console.log(response);

           /*  if(response.status===200){
                

                console.log('get', response);

                //redirect
                //this.$router.push({ name: 'AppLayout'})
            }else{
                this.strErrorResponse = response.data.detail
            } */
        }
    }
}
</script>
<style scoped>
/* .form-control{
    background:rgba(0, 0, 0, 0.24) !important;
    color: white !important;
    width: 80% !important;

} */

</style>
