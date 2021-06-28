export default {
  /** 
     * @description commit to the mutation setAuthenticateDataUser
     * @param {any} state reference to the mutation setAuthenticateDataUser
     * @param {any} payload get data
     */
   getAuthenticateDataUser:function(state, payload){
    state.commit('setAuthenticateDataUser', payload)
  },

  /** 
  * @description reads the token from local storage and executes the setTokenAuth mutation with the token or null.
  * @param {any} commit execute to the mutation setTokenAuth
  */
  readToken:function({commit}){   
    localStorage.getItem('keyToken') ? commit('setTokenAuth', localStorage.getItem('keyToken')) : commit('setTokenAuth', null)
  },
};