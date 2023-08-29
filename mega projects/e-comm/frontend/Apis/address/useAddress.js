import { useQuery } from "@tanstack/react-query"
import axios from "axios"



const useAddress = () => {

    const {data , isError, isSuccess , error , isLoading } = useQuery({
        queryKey: ["address/get"] , 
        queryFn : async () => {
             const data = await axios.get ("api/v1/address/get")
             return data.data
        }
    })



    return {
        data, 
        isError , 
        isSuccess , 
        error,
         isLoading
    }

}


export default useAddress