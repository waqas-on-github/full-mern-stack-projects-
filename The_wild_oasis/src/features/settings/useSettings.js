import { useQuery } from "@tanstack/react-query"
import { getSettings } from "../../services/settingApi"



export const useSetting = () => {
    const {data  , isLoading , error} = useQuery({ 
        queryKey : ["setting"] , 
        queryFn : getSettings,
    })



    return {data , isLoading , error}
}