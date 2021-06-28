<template>
<div class="container">
    <div class="col-12 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title mt-4 mb-4">Register Company</h4>
                <ValidationObserver v-slot="{handleSubmit}">
                    <form class="form-sample" @submit.prevent="handleSubmit(registerCompany)">
                        <div class="row">
                            <div class="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <ValidationProvider :name="objLabels.company_name" :rules="objRules.company_name" v-slot="{ errors }">
                                <label>Logo  <span class="text-danger">*</span></label>
                               <div class="input-group col-xs-12">
                                    <div class="custom-file col-sm-12">
                                        <input @change="uploadFile" type="file" ref="file" class="file-upload-default" id="inputFile" accept=".jpg, .png, .jpeg" />
                                        <label class="custom-file-label" for="inputFile">Choose file</label>
                                    </div>
                                </div>
                                <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div> 

                            <!-- 
                            <div class="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <ValidationProvider :name="objLabels.company_name" :rules="objRules.company_name" v-slot="{ errors }">
                                <label>Logo  <span class="text-danger">*</span></label>
                                <input type="file" class="file-upload-default" />
                                <div class="input-group col-xs-12">
                                    <input type="text" class="form-control file-upload-info"  placeholder="Upload Image" />
                                    <span class="input-group-append">
                                        <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                                    </span>
                                </div>
                                <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>  -->

                            <div class="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <ValidationProvider :name="objLabels.company_name" :rules="objRules.company_name" v-slot="{ errors }">
                                    <label>Compnay Name <span class="text-danger">*</span></label>
                                    <input id="company_name" type="text" class="form-control" v-model="formData.company_name" placeholder="Company Name" />
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <ValidationProvider :name="objLabels.field" :rules="objRules.field" v-slot="{ errors }">
                                    <label class="col-form-label">Field <span class="text-danger">*</span></label>
                                    <input id="field" type="field" class="form-control" v-model="formData.field" placeholder="Field" />
                                    <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                            <div class="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <ValidationProvider :name="objLabels.location_country" :rules="objRules.location_country" v-slot="{ errors }">
                                   <label class="col-form-label">Country <span class="text-danger">*</span></label>
                                    <!--<v-select class="comboBox" :options="formData.location_country"></v-select> !-->
                                    <v-select v-model="formData.location_country" id="location_country" :options="arrayCountry"
                                        :reduce="as => as.value" label="value">
                                    </v-select>
                                    <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <ValidationProvider :name="objLabels.location_state" :rules="objRules.location_state" v-slot="{ errors }">
                                    <label class="col-form-label">State/Province <span class="text-danger">*</span></label>
                                    <input id="location_state" type="state" class="form-control" v-model="formData.location_state" placeholder="State/Province" />
                                    <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <ValidationProvider :name="objLabels.number_phone" :rules="objRules.number_phone" v-slot="{ errors }">
                                    <label class="col-form-label">Phone Number <span class="text-danger">*</span></label>
                                    <input id="number_phone" type="text" class="form-control" v-model="formData.number_phone" placeholder="Phone Number" />
                                    <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <ValidationProvider :name="objLabels.email" :rules="objRules.email" v-slot="{ errors }">
                                    <label class="col-form-label">Email <span class="text-danger">*</span></label>
                                    <input id="email" type="email" class="form-control" v-model="formData.email" placeholder="Email" />
                                    <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>                      
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary mr-2 mt-4">Submit</button>
                        </div>
                    </form>
                </ValidationObserver>
                <center>
                    <div v-if="strErrorResponse" class="form-group form check ml-4">
                        <label class="form-check-label" for="error">{{strErrorResponse}}</label>
                    </div>
                </center>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import {fileImage, truncateBase64String} from '@/utils/imgFuntionsj'
import {toastMessage} from '@/utils/baseFuntions'
import {sizeMB} from '@/utils/dataRepository'

import {apiRegisterCompamy, apiLocationGetCountries} from '../uri'
import {objCompanyRules, objLabelCompany} from '../model/companyModel'
import {postHttp, getHttp} from '@/utils/httpDefault'

export default {
    name:'RegisterCompany',
    data() {
        return {
            formData:{},
            objRules:{},
            objLabels:{},
            strErrorResponse:'',

            arrayCountry:[],
        }
    },
    
    methods:{
        async registerCompany () {
            this.strErrorResponse = ''

            const objLoader = this.$loading.show();
            const response = await postHttp(apiRegisterCompamy, this.formData)
            objLoader.hide()           
            if(response.status==200){
                console.log('200', response);
                this.strErrorResponse = 'OK'
            }else if(response.status==400){
                this.strErrorResponse = response.data.email[0]
            }else{
               this.strErrorResponse = response.status
               console.log(response);
            }
        },
        async getLocationCountry () {
            const objLoader = this.$loading.show();
            const response = await getHttp(apiLocationGetCountries)
            objLoader.hide()         
            if(response.status==200){
                this.arrayCountry = response.data.contries
            }else{
               console.log(response);
            }
        },

         /** 
         * @description receives the id and action to make the request to the enable and disable api
         * @param {Object} e receives the image object loaded by the input of type file
        */
        uploadFile(e){
            const file = fileImage(e, sizeMB, 'inputFile')
            if(file == true){
                //this.objParams.picture = this.createBase64Image(e.target.files[0]);
                this.createBase64Image(e.target.files[0]);
                let fileName = e.target.files[0].name;
                if (e.target.nextElementSibling!=null){
                    e.target.nextElementSibling.innerText=fileName;
                }                
            }else{
                this.$toast.error(file, toastMessage());
            }
        },

        /** 
         * @description converts the image to base64 format
         * @param {Object} fileObject object image
         * @return {String}
         */
        createBase64Image(fileObject) {
            const reader = new FileReader();
            reader.onload = (e) => {
            const pic = e.target.result;
                this.formData.logo_company = truncateBase64String(pic);
            };
            reader.readAsDataURL(fileObject);
        },

    },
    mounted(){
    this.objRules = objCompanyRules
    this.objLabels = objLabelCompany

        this.formData = {   company_name: 'company_name',
                           /*  logo_company:'logo', */
                            name:"Company ",
                            field:"Field",
                            location_country:"Ecuador",
                            location_state:"STATE",
                            email:"dev_team_2@inreservoir.com",
                            number_phone:"245354656"
                        }
    },
    created(){
        this.getLocationCountry()
    }
}
</script>

<style scoped>
.comboBox{
    background: #2A3038;
}
</style>