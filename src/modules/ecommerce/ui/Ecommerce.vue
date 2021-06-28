<template>
    <div>
    <Header></Header>
      <b-container class="wizard" >
        <div class="container">
            <div class="card-body">
            <template> <!--  @on-change="onChangeTab" --> 
                <form-wizard ref="formWizard" step-size="sm"
                            @on-change="onChangeTab" @on-validate="onValidateTab"  @on-complete="onComplete"
                            title="" subtitle=""
                            color="#77b852">
                    <tab-content :before-change="validateFirstStep" title="Purchase Options" icon="ti-user">
                        <div>
                            <input type="radio" id="uno" value="1" v-model="objParams.picked">
                            <label for="uno"> Credit-Card</label>
                        </div>
                       
                        <div>
                            <input type="radio" id="Dos" value="2" v-model="objParams.picked">
                            <label for="Dos"> Purchase Order</label>
                        </div>
                    </tab-content>

                  
                    <tab-content :before-change="validateFirstStep" title="Payments" icon="ti-user">
                        <div v-if="objParams.picked==='1'">
                        <CrediCard></CrediCard>
                        </div>
                        <div v-if="objParams.picked==='2'">
                        <PurchaseOrder></PurchaseOrder>
                        </div>
                    </tab-content>

                    <tab-content v-if="objParams.picked==='2'" :before-change="validateFirstStep"  title="PDF" icon="ti-check">
                        <h3>visualizacion de pdf</h3>
                    </tab-content>
                
                    <tab-content  :before-change="validateFirstStep"  title="Register Company" icon="ti-check">
                         <h3>Register Company</h3>
                    </tab-content>

                </form-wizard>
            </template>
        </div>

        </div>
      </b-container>
<Footer></Footer>
</div>

</template>


<script>
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Footer/Footer'
import CrediCard from '@/modules/ecommerce/ui/CreditCard'
import PurchaseOrder from '@/modules/ecommerce/ui/PurchaseOrder'

export default {
   name:"Ecommerce",
    components: {
        CrediCard, 
        PurchaseOrder,
        Header,
        Footer,
    },  
    data(){
      return{
        objParams: { 
          picked:''
        }
      }
      
    },
    
    methods: {
      doSomethingOnHidden(){
        //alert('aaa')
        
        this.objParams = {
            picked:'aa'
        }
        
      },
      
        //METODOS PRINCIPALES VALIDACIONES TAB
        onChangeTab(prevIndex, nextIndex) {
            this.nextIndex(nextIndex);
            this.prevIndex(prevIndex);
        },
       

        validateFirstStep() { //Primer metodo al ejecutarse al dar sgt
            //Si retorna true validara los tabs por paciente TITULAR // ELSE PACIENTE DEPENDIENTE
          
           
              let index = this.$refs.formWizard.slotProps.activeTabIndex;
              console.clear()
             
              let invalid = null;
              return new Promise((resolve, reject) => {
                console.log(reject);
                  switch (index) {
                      case 0://INGRESO PACIENTE
                          if(this.objParams.picked){
                              invalid = true
                          }
                          resolve(invalid); 
                          console.log('invalid', invalid);

                          
                          break;
                      case 1://Datos Paciente 
                          
                          break;
                      case 2://Asistencia Medica
                          
                          break;
                      default:
                  }
              });  
            
        },

        nextIndex:function(index){ //Segundo metodo al ejecutarse al dar sgt
             switch (index) {
                    case 0: //Ingreso Paciente
                        break;
                    case 1://Datos Paciente
                        
                        break;
                    default:
                        
                }
        },

        prevIndex(index) { //Tercer metodo al ejecutarse al dar sgt
        console.log(index);
            /* if(this.$store.getters.getStateTipoPaciente == true){
                switch (index) {
                    case 0: //Datos Paciente
                        break;
                    case 1: //Digitalización Documentos
                        break;
                    default://Generar Cita
                }
            }else{
                switch (index) {
                    case 0: //Datos Paciente
                        break;
                    case 1://Datos titular
                        break;                  
                    default:
                }
            }  */
        },

        onComplete: function(){
           
        },

        onValidateTab(validationResult, activeTabIndex) {
          console.log(validationResult);
          console.log(activeTabIndex);
            //Se debera realizar las validaciones respectivas para cada tab
        },
    },

}
</script>

<style scoped>
.wizard{
 background: rgb(24, 24, 23) !important;
 margin-top:100px;
}
label{
    padding-left: 20px;
}

</style>

