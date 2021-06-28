import axios from 'axios'; 

axios.defaults.baseURL="https://ws-idlink.azurewebsites.net"

 /** 
 * @description post method for authentication login
 * @param {String} url post type api url
 * @param {Object} body object to be consulted by means of the api
 * @return {Object}
 */
export const postHttp = async function(url, body) {   
    return await axios.post(url, body).then(response =>{
        return response
    }).catch(error => {
        return error.response
    });   
}

 /** 
 * @description 
 * @param {String} url get type api url
 * @param {Object} params object to be consulted by means of the api
 * @return {Object}
 */
  export const getHttp = async function(url, params=null) {   
    return await axios.get(url, {params}).then(response =>{
        return response
    }).catch(error => {
        return error.response
    });   
} 

 /** 
 * @description 
 * @param {String} url post type api url
 * @param {Object} body object to be consulted by means of the api
 * @return {Object}
 */
  export const putHttp = async function(url, body) {   
    return await axios.put(url, body).then(response =>{
        return response
    }).catch(error => {
        return error.response
    });   
}