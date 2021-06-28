import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import BootstrapVue from 'bootstrap-vue';

import './registerServiceWorker'


/*ToDo APP*/
import './config/veevalidate'
import './config/vueselect'
import './config/vueLoading'
import './config/sweetalert2'
import './config/toastification'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueFormWizard);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')