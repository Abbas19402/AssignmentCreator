import axios from "axios"
import { toast } from "react-toastify"

const useFetch = async(method , url , options) => {
    let isLoading = true
    const response = await axios({
        method: `${method}`,
        url: `${url}`,
        data: options.data,
        headers: options.headers ? options.headers : null
    })
    if(response.status == 200) {
        isLoading = false
    } else { 
        isLoading = false
    }
    return {
        response,
        isLoading
    }
}

export default useFetch