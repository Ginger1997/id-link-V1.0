import store from '../store'

 /** 
 * @description validates the maximum image size in megabyte and format
 * @param {Object} e receives the image object loaded by the input of type file
 * @param {Number} sizaMB maximum image size to be uploaded in megabytes
 * @param {String} elementById input identifier
 * @return {Object}
 */
export const fileImage = (e, sizaMB, elementById) => {
    let inputImage = ''

    if (e.target.files[0] == undefined) return
 
    if (e.target.files[0]["type"] === "image/png" || 
                        e.target.files[0]["type"] === "image/jpg" || e.target.files[0]["type"] === "image/jpeg") {
    
        const selectedImage = e.target.files[0];
        const sizeIMG = selectedImage.size /1024/1024; // in MiB
        if (sizeIMG> sizaMB) {
            inputImage = document.getElementById(elementById);
            inputImage.value = ''; 
            return 'File size exceeds 2 MiB'
        }
    } else {
        inputImage = document.getElementById(elementById);
        inputImage.value = '';
        return 'Allowed file formats: .png, .jpg, .jpeg.'
    }
    //return createBase64Image(e.target.files[0]);
    return true
}

 /** 
 * @description converts the image to base64 format
 * @param {Object} fileObject object image
 * @return {String}
 */
export const createBase64Image = (fileObject) => { 
    const reader = new FileReader();
    reader.onload = (e) => {
        const pic = e.target.result;
        return truncateBase64String(pic);
    };
    reader.readAsDataURL(fileObject);
}

/** 
 * @description replaces the string set with ""
 * @param {Object} fileObject object image
 * @return {String}
 */
export const truncateBase64String = (imgString) => {
    return imgString.replace("data:image/jpeg;base64,", "")
                .replace("data:image/png;base64,", "")
                .replace("data:image/jpeg;base64,", "");
}

const  strUrlApi = 'https://ui-avatars.com/api/?name='
/** 
 * @description obtains the user's image for display in the layout
 * @param {Object} fileObject object image
 * @return {String}
 */
export const getImgUser = ()=>{
    let srtSetIMG = null
    const strImgBase64 = store.getters['userAuth/getAuthDataUser'].picture;
    if(strImgBase64){
        srtSetIMG = `${store.getters.getDataImg}${strImgBase64}`
        return srtSetIMG
    }else{
        const firstName = store.getters['userAuth/getAuthDataUser'].firstName
        const lastname =  store.getters['userAuth/getAuthDataUser'].lastname
        srtSetIMG = strUrlApi+firstName+lastname
        return srtSetIMG
    }
}