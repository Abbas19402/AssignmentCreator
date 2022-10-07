import axios from "axios";

const useFetch = async(method , url ,values ,header ) => {
    let response
    let code
    if(header) {

        try {
            const data =  await axios(`${process.env.NEXT_PUBLIC_API_URL}/${url}`,{
                method: `${method}`.toUpperCase(),
                data: values,
                headers: header
            })
            return {
                response:data,
                code
            }
        } catch (error) {
            console.log(error)
        }
    
       
    } else {
        await axios(`${process.env.NEXT_PUBLIC_API_URL}/${url}`,{
            method: `${method}`.toUpperCase(),
            data: values
        }) .then( res => {
            response = res
            code = res.code
        } ) .catch( err => {
            response = err
            code = ''
        })
        return {
            response,
            code
        }
    }
}

export default useFetch