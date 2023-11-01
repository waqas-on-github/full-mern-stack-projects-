import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/cabinApi";

export const useCreateCabin = () => {
    const queryClient = useQueryClient()
    const { mutate : mutateCreate, isLoading  } = useMutation({
        mutationFn: createCabin,
    
        onSuccess: () => {
          toast.success("new cabin added");
        //   reset();
          queryClient.invalidateQueries({
            queryKey: ["cabins"],
          });
        },
    
        onError: (error) => {
          toast.error(error.message);
        },
      });

return {mutateCreate , isLoading}

}