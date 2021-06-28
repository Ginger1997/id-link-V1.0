import axios from 'axios'
//import store from '../store'

/** 
* @description axios baseURL
*/
const API ="https://ws-idlink.azurewebsites.net"


//let token = null

//localStorage.getItem('keyToken') ? token = localStorage.getItem('keyToken') : token = store.getters.getToken

/** 
* @description axios instance for requests with auth token
*/
export const apiClientAuth = axios.create({
    baseURL: API,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8', //'Content-Type': 'multipart/form-data',
        //'Authorization': `bearer ${token}`
    }
}) 
