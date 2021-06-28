import {apiClientAuth} from '@/config/axios' 

 /** 
 * @description get method for api queries
 * @param {String} url get type api url
 * @param {Object} params object to be consulted by means of the api
 * @return {Object}
 */
export const getHttpAuth = async function(url, params=null) {   
    return await apiClientAuth.get(url, {params}).then(response =>{
        return response.data
    }).catch(error => {
        return error.response
    });   
} 


/** 
 * @description post method for sending data with authentication token
 * @param {String} url post type api url
 * @param {Object} body object to be consulted by means of the api
 * @return {Object}
 */
export const postHttpAuth = async function(url, body) {   
    return await apiClientAuth.post(url, body).then(response =>{
        return response.data
    }).catch(error => {
       return error.response
    });   
}


 /** 
 * @description put method for sending data with authentication token
 * @param {String} url post type api url
 * @param {Object} body object to be consulted by means of the api
 * @return {Object}
 */
 export const putHttpAuth = async function(url, body) {   
    return await apiClientAuth.put(url, body).then(response =>{
        return response.data
    }).catch(error => {
        return error.response
    });   
}