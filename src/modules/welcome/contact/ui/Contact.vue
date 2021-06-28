<template>
    <div>
        <Header/>
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h1>CONTACT US</h1>
                        <img class="messages" src="@/assets/pictures/messages.png" />
                        <ValidationObserver v-slot="{handleSubmit}">
                            <form class="forms-sample" @submit.prevent="handleSubmit(sendEmail)">
                                <ValidationProvider name="From:" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="exampleInputName1">From:</label>
                                        <input id="from" type="email" class="form-control" v-model="formData.from" placeholder="Email" />
                                    </div>
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>

                                <ValidationProvider name="Subject:" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="exampleInputCity1">Subject</label>
                                        <input type="text" class="form-control" id="Subject" placeholder="Subject" v-model="formData.subject" />
                                    </div>
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                                <ValidationProvider name="Description:" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="exampleTextarea1">Description</label>
                                        <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                                    </div>
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                                <button type="submit" class="btn btn-primary mr-2">Send</button>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
</template>


<script>

import Header from '@/components/Navigation/Header';
import Footer from '@/components/Footer/Footer';

export default {
  name: 'Contacts',  
  components: { Header,Footer },
  data() {
    return {
      formData:{},
    };
  },
  /*  methods:{
        async sendEmail () {
            //const objLoader = this.$loading.show();
            const response = await postHttp(apiSendEmail, this.formData)
            if(response.status==200){
                //rederigir al login
                //console.log(response);
                //this.$router.push({ name: 'Login'})
            }else if(response.status==400){
                console.log(response);
                //this.strErrorResponse = response.data.detail
            }
        },

    }, */
};
</script>
<style>
.card{
    margin-top: 100px;
    margin-right:auto;
    display:flex;
   
}
.card .card-body{
max-width: 500px;
background:#21232b !important;

}
h1{
    text-align: center !important;
}
img{
    text-align: center !important;
    width: 30%;
    height: 30%;
    display: inline-block;
}

</style>
