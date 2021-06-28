<template>
<div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-body">
             <label>Search: </label>
             <input class="ml-4 mb-2" v-model="filterObject.filterText"  style="width=40% !important; background:#5D6D7E; color:white"/>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Actions</th>
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
                            <td>
                                <button class="option" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-edit"></i></button>
                                <button class="option"><i class="fas fa-trash"></i></button>
                            </td>
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
    <modalEdit></modalEdit>
</div>

</template>


<script>
import {apiUserListUser} from '../uriApi'
import {getHttp} from '@/utils/httpDefault'
import modalEdit from '@/modules/company/ui/EditCompany'

export default {
    name:'ListCompany',
    components:{
        modalEdit,
    },

    data() {
        return {
            arrayDataList:[],
            filterObject: { filterText: '' },
        }
    },
    
    methods:{
        async getDataUser () {
            const objLoader = this.$loading.show();
            const response = await getHttp(apiUserListUser)
            objLoader.hide()         
            if(response.status==200){
                this.arrayDataList = response.data
                console.log(this.arrayDataList );
            }else{
               console.log(response);
            }
        },
      filterFunction(arrayDataList, filterObject) {
        return this.arrayDataList.first_name.toLowerCase().includes(filterObject.filterText);
    }
    },
    mounted(){},
    created(){
        this.getDataListUser()
    }
}
</script>
<style>
.option{
padding-right: 10px;
background: transparent;
color:white;
}
</style>