<template>
    <div class="container">
    <div class="col-12 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Edit Company</h4>
                <ValidationObserver v-slot="{handleSubmit}">
                    <form class="form-sample" @submit.prevent="handleSubmit(editCompany)">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Logo: </label>
                                    <div class="col-sm-9">
                                        <input type="file" name="img[]" class="file-upload-default" />
                                        <div class="input-group col-xs-12">
                                            <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image" />
                                            <span class="input-group-append">
                                                <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                            <ValidationProvider :name="objLabels.company_name" :rules="objRules.company_name" v-slot="{ errors }">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Compnay Name:</label>
                                    <div class="col-sm-9">
                                       <input id="company_name" type="text" class="form-control" v-model="formData.company_name" placeholder="Company Name" />
                                    </div>
                                     <span>{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                             <ValidationProvider :name="objLabels.field" :rules="objRules.field" v-slot="{ errors }">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Field:</label>
                                    <div class="col-sm-9">
                                        <input id="field" type="field" class="form-control" v-model="formData.field" placeholder="Field" />
                                    </div>
                                    <span>{{ errors[0] }}</span>
                                </div>
                              </ValidationProvider>
                            </div>
                            <div class="col-md-6">
                             <ValidationProvider :name="objLabels.location_contry" :rules="objRules.location_contry" v-slot="{ errors }">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Country:</label>
                                    <div class="col-sm-9">
                                    <v-select v-model="formData.location_country" id="location_country" :options="arrayCountry"
                                        :reduce="as => as.value" label="value">
                                    </v-select>
                                    </div>
                                     <span>{{ errors[0] }}</span>
                                </div>
                               </ValidationProvider>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                            <ValidationProvider :name="objLabels.location_state" :rules="objRules.location_state" v-slot="{ errors }">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">State/Province:</label>
                                    <div class="col-sm-9">
                                         <input id="location_state" type="state" class="form-control" v-model="formData.location_state" />
                                       
                                    </div>
                                    <span>{{ errors[0] }}</span>
                                </div>
                             </ValidationProvider>
                            </div>
                            <div class="col-md-6">
                            <ValidationProvider :name="objLabels.number_phone" :rules="objRules.number_phone" v-slot="{ errors }">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Phone Number:</label>
                                    <div class="col-sm-9">
                                        <input id="number_phone" type="text" class="form-control" v-model="formData.number_phone" />
                                    </div>
                                    <span>{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                            <ValidationProvider :name="objLabels.email" :rules="objRules.email" v-slot="{ errors }">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Email:</label>
                                    <div class="col-sm-9">
                                        <input id="email" type="email" class="form-control" v-model="formData.email"/>
                                    </div>
                                     <span>{{ errors[0] }}</span>
                                </div>
                             </ValidationProvider>
                            </div>
                        </div>
                         <div class="mt-4">
                            <button type="submit" class="btn btn-primary btn-lg">SAVE</button>
                         </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import {fileImage, truncateBase64String} from '@/utils/imgFuntionsj'
import {toastMessage} from '@/utils/baseFuntions'
import {sizeMB} from '@/utils/dataRepository'

import {apiCompanyUpdateCompany, apiLocationGetCountries} from '../uri'
import {objCompanyRules, objLabelCompany} from '../model/companyModel'
import {postHttp, getHttp} from '@/utils/httpDefault'

export default {
    name:'EditCompany',

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
        async editCompany () {
            this.strErrorResponse = ''

            const objLoader = this.$loading.show();
            const response = await postHttp(apiCompanyUpdateCompany, this.formData)
            objLoader.hide()   
            console.log(response);        
            if(response.status==200){
                this.$toast.success('OK', toastMessage());
            }else{
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
                            name:"Company1 ",
                            field:"Field1",
                            location_country:"Ecuador1",
                            location_state:"STATE1",
                            email:"1ginger.pizarddrssoaaa1250997@hotmail.com",
                            number_phone:"147258963"
                        }
    },
    created(){
        this.getLocationCountry()
    }
}
</script>
