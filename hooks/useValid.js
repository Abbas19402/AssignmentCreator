import React, { useEffect } from 'react'

const useValid = async( formData ) => {
    const formValues = Object.values(formData)
    var validationStatus
    let nulls = []
    const isValid = () => {
        let EmptyKeys = []    
        formValues.map((item ,key) => {
            if(item == '') {
                EmptyKeys.push(key)
            }
        })
        if(EmptyKeys.length !== 0)  {
            validationStatus = false
            Object.keys(formData).map((keys ,index) => {
                EmptyKeys.map((item) => {
                    if(item == index) {
                        nulls.push(keys)
                    }
                })
            })
        } else {
            validationStatus = true
        }
    }
    useEffect(()=> {
        isValid()
    })
    return {
        validStatus: validationStatus,
        nullKeys: {}
    }
}

export default useValid