import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCabin } from "../../services/cabinApi";
import { useQueryClient } from "@tanstack/react-query";


export const useEditCabin  = () => {

    const queryClient = useQueryClient()

    const { mutate : mutateEdit, isLoading : isEditLoading } = useMutation({
        mutationFn: ({newCabindata , id}) =>{
          createCabin(newCabindata , id)
        } , 
    
        onSuccess: () => {
          toast.success(" cabin sucessfully edited ");
          queryClient.invalidateQueries({
            queryKey: ["cabins"],
          });
        },
    
        onError: (error) => {
          toast.error(error.message);
        },
      });

      return {mutateEdit , isEditLoading}
}