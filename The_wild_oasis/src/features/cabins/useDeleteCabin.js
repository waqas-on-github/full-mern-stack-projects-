import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/cabinApi";
import toast from "react-hot-toast";



export const  useDeleteCabin = () => {

const queryclient = useQueryClient();

const { mutate , isLoading    } = useMutation({
  mutationFn: deleteCabin, 
  onSuccess: () => {
    toast.success ("cabin deleted successfully") ,

    queryclient.invalidateQueries({
      queryKey: ["cabins"],
      
    });
  },
  onError: (error) => {

    toast.error(error.message);
  },
});

return {mutate , isLoading}

}

