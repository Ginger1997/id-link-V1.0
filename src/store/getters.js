export default {
    /** 
    * @description gets the prefix value of the state
    */
    getPrefix: state => state.prefix,

    /** 
    * @description gets the srtDataImg value of the state
    */
    getDataImg: state => state.srtDataImg,

    /** 
    * @description gets the authToken value of the state
    */ 
    getToken: state => state.authToken,

     /** 
    * @description 
    */
    getDataUser: state => state.objUrser,
};