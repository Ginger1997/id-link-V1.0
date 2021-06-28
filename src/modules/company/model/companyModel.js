/** 
 * @description objCompanyRules rules
 */
export const objCompanyRules = {
    id: 'required',
    logo_company: 'required',
    company_name: 'required',
    field: 'required',
    location_country: 'required',
    email: 'required',
    location_state: 'required',
    number_phone: 'required|numeric|max:9',
}

/** 
 * @description objLabelCompany labels
 */
export const objLabelCompany = {
    id: 'id',
    logo_company: 'logo company',
    company_name: 'company name',
    field: 'field',
    location_country: 'location contry',
    email: 'email',
    location_state: 'location state',
    number_phone: 'number phone',
}