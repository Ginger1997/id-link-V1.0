import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

//moduls store


import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex)

/** 
 * @description Vuex-Store instance
 */
export default new Vuex.Store({ 
  strict: true, //disable for prod,

  plugins: [
    /** 
   * @description Creates a new instance of the plugin with the given options
   * @param {String} key The key to store the persisted state under. Defaults to vuex.
   * @param {String} value The value to store the persisted state under. Defaults to vuex.
   */
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],

  /** 
   * @property vuex store modules
   */
  modules: {  },
  /** 
   * @property state, initialization of store variables
   */
  state: {
    prefix:'/strata-d',

    idUser: null,
    authToken: null, 
        
    srtDataImg:'data:image/jpeg;base64,',

    objUrser:{},
  },

  actions,
  getters,
  mutations,
})
