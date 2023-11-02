import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSetting } from "../../services/settingApi"
import toast from "react-hot-toast"

export const useSettingUpdate = () => {
const queryclient = useQueryClient()


const {mutate } = useMutation({
    mutationFn :  (data) => { updateSetting(data)},


   onSuccess : () => {

        queryclient.invalidateQueries({queryKey: ["setting"]});
      
        toast.success("updated successfully")
     },

     onError : (error) => {
        toast.error(error.message)
    }
})



return {mutate}

}