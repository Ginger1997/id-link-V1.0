<template>
    <div class="container">
    <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>{{ objParam.first_name }} {{ objParam.last_name }}</h4>
                      <p class="text-secondary mb-1">{{ objParam.rol }}</p>
                      <p class="text-muted font-size-sm">{{ objParam.position }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
           
            <div class="col-md-8">
             <form>
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Firt Name:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     <input v-model="objParam.first_name" type="text" class="form-control" >
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Middle Name:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                       <input v-model="objParam.middle_name" type="text" class="form-control" >
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Last Name:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="objParam.last_name" type="text" class="form-control" >
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Birthday:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="objParam.birthday" type="text" class="form-control" >
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone Number:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="objParam.phone_number" type="text" class="form-control" >
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="objParam.email" type="text" class="form-control" >
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                      <input type="button" class="btn btn-primary px-4" value="Save Changes">
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Profile',
    components:{
    },
    data(){
        return{
            objParam:{
                company_name:'Stratagraph',
                rol:'Oficinista',
                departament: 'Laboratorios',
                position:'Gerente de laboratorio',
                first_name: 'Ginger',
                middle_name: 'Kerly',
                last_name: 'Pizarro',
                phone_number: '098857585',
                birthday: '25/09/1997',
                email: 'ginger.pizarro250997@hotmail.com',
        }
        }
      
    }
}
</script>
<style src="../css/profile.css" lang="css"/>