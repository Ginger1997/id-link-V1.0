export default {
  /** 
 * @description set the user auth information in the store
 * @param {any} state reference to the authDataUser object of the store
 * @param {any} payload object authDataUser
 */
   setAuthenticateDataUser(state, payload) {
    state.idUser = payload.id
    state.authToken = payload.idToken
  },


  


  /** 
 * @description 
 * @param {any} state 
 * @param {any} authToken
 * @return {getImg} 
 */
  setTokenAuth(state, payload){
    state.token = payload
  }, 
};