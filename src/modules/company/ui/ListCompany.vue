<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Striped Table</h4>
                <p class="card-description">Add class <code>.table-striped</code></p>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Compnay Name</th>
                                <th>Country</th>
                                <th>Email</th>
                                <th>Active Well</th>
                                <th>Disable Well</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in arrayDataList" :key="data.id">
                                <td>{{data.logo_company}}</td>
                                <td>{{data.company_name}}</td>
                                <td>{{data.location_country}}</td>
                                <td>{{data.email}}</td>
                                <td>{{data.logo_company}}</td>
                                <td>{{data.logo_company}}</td>
                                <td>{{data.logo_company}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {apiCcompanyListCompany} from '../uri'
import {getHttp} from '@/utils/httpDefault'

export default {
    name:'ListCompany',

    data() {
        return {
            arrayDataList:[],
        }
    },
    
    methods:{
        async getDataListCompany () {
            const objLoader = this.$loading.show();
            const response = await getHttp(apiCcompanyListCompany)
            objLoader.hide()         
            if(response.status==200){
                this.arrayDataList = response.data
                console.log(this.arrayDataList );
            }else{
               console.log(response);
            }
        },
    },
    mounted(){},
    created(){
        this.getDataListCompany()
    }
}
</script>