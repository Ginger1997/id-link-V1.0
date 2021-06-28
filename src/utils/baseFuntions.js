 /** 
  * @description initialization of warning object for user acknowledgement messages to be displayed in the interface
  * @param {String} html render the notification question
  * @param {String} text renders the notification message
  * @return {Object}
  */
 export function setSwallWarning(title, text = null) {
     const warning = {
         title: title,
         text: text,
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Yes, Confirm!',
         cancelButtonText: 'Cancel',
     }
     return warning
 }

 /** 
  * @description initialization of toastMessage object for notification messages, success, info, warning, error
  * @return {Object}
  */
 export function toastMessage() {
     const toastMessage = {
         position: "top-right",
         timeout: 2000,
         closeOnClick: true,
         pauseOnFocusLoss: true,
         pauseOnHover: true,
         draggable: true,
         draggablePercent: 0.6,
         showCloseButtonOnHover: false,
         hideProgressBar: true,
         closeButton: "button",
         //icon: "fas fa-rocket",
         icon: true,
         rtl: false
     }
     return toastMessage;
 }


 /**
  * @description resets the info loaded in the datatable
  * @param {String} classs datatable css class
  */
 export function resetDatatable(objDataTable) {
     //destroy datatable
     objDataTable.clear().destroy();
 }


 /**
  * @description removes repeats in array for excel loading in bit details, bha, pipe tally via serial key
  * @param {Array} array
  * @return {Array}
  */
 export function removeRepeatsArray(array) {
     let hash = {};
     array = array.filter(function(i) {
         let exists = !hash[i.serial];
         hash[i.serial] = true;
         return exists;
     });

     return array
 }