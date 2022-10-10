import axios from "axios";

const useFetch = async(method , url ,values ,header ) => {
    if(header) {
        try {
            const data =  await axios(`${process.env.NEXT_PUBLIC_API_URL}/${url}`,{
                method: `${method}`.toUpperCase(),
                data: values,
                headers: header
            })
            return {
                response:data,
            }
        } catch (error) {
            return {
                response: error
            }
        }
    } else {
        try {
            const data =  await axios(`${process.env.NEXT_PUBLIC_API_URL}/${url}`,{
                method: `${method}`.toUpperCase(),
                data: values
            })
            return {
                response:data,
            }
        } catch (error) {
            return {
                response: error
            }
        }
    }
}

export default useFetch