 /** 
 * @description validates the maximum excel size in megabyte and format
 * @param {Object} e receives the excel object loaded by the input of type file
 * @param {Number} sizaMB maximum image size to be uploaded in megabytes
 * @param {String} elementById input identifier
 * @return {Object}
 */
export const validateExcel = (e, sizaMB, elementById) => {
    let file = ''
    let format = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

    if (!e.target.files[0])  return

    if (e.target.files[0]["type"] === format) {    
        const selectedImage = e.target.files[0];
        const sizeIMG = selectedImage.size /1024/1024; // in MiB
        if (sizeIMG> sizaMB) {
            file = document.getElementById(elementById);
            file.value = ''; 
            return 'File size exceeds 2 MiB'
        }
    } else {
        file = document.getElementById(elementById);
        file.value = '';
        return 'Allowed file formats: .xls, .xlsx'
    }

    return true
}