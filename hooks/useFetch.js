import axios from "axios"
import { toast } from "react-toastify"

const useFetch = async(method , url , options) => {
    let isLoading = true
    const response = await axios({
        method: `${method}`,
        url: `${url}`,
        data: options
    })
    if(response.status == 200) { 
        toast.success('Login Successfull')
        isLoading = false
    } else { 
        toast.error('login Failed') 
        isLoading = false
    }
    return {
        response,
        isLoading
    }
}

export default useFetch