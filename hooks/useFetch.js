import axios from "axios";

const useFetch = async(method , url ,values ,header ) => {
    console.log(values);
    let response
    if(header) {
        console.log('if');
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
        console.log("else");
        const res = await fetch(`${url}`,{
            method: `${method}`.toUpperCase(),
            body: values
        })
        const response = await res.json()   
        return {
            response
        }
    }
}

export default useFetch