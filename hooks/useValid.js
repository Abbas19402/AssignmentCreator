const useValid = (form) => {
    console.log('Function called');
    let formValues = Object.values(form)
    let formKeys = Object.keys(form)
    let EmptyFields = []
    let isFormValid = formValues.every( item => item !== '' )
        formValues.map( ( item , index ) => {
            if(item == '') {
                EmptyFields.push((formKeys[index]))   
            }
        })
    if(isFormValid == false) {
        return {
            emptyKeys: EmptyFields,
            validationStatus: false
        }
    } else {
        return {
            emptyKeys: EmptyFields,
            validationStatus: true
        }
    }
}
export default useValid