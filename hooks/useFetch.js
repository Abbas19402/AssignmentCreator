import axios from "axios";

const useFetch = async(method , url ,values ,header ) => {
    let response
    if(header) {
        await axios(`${url}`,{
            method: `${method}`.toUpperCase(),
            data: values,
            headers: header
        }) .then( res => {
            response = res
        } ) .catch( err => {
            response = err
        })
        return {
            response
        }
    } else {
        await axios(`${url}`,{
            method: `${method}`.toUpperCase(),
            data: values
        }) .then( res => {
            response = res
        } ) .catch( err => {
            response = err
        })
        return {
            response
        }
    }
}

export default useFetch