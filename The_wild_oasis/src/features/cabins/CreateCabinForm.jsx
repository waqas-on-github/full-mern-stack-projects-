import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/cabinApi";
import toast from "react-hot-toast";
import FormRow  from "../../ui/FormRow";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const Label = styled.div`
  
`


function CreateCabinForm() {
  
const queryClient = useQueryClient()

// input validation 
const schema = yup.object({ 
  name : yup.string().typeError("name must be string").required("name is required"), 
  maxCapacity : yup.number().typeError("maxCapacity must be number").required("maxCapacity is required").max(200),
  regularPrice : yup.number().typeError("regularPrice must be number").required("regularPrice is required").max(100) , 
  discount : yup.number().typeError("discount must be number").required("discount is required").test('lessThanOrEqual',
  'Discount should be less than or equal to regular price',
   function(value) {
    return value <= this.parent.regularPrice;
  }),
  discription :  yup.string().required()
  
})

  
const {register , handleSubmit , reset , formState   } = useForm({
  resolver : yupResolver(schema)
})
const {errors} = formState ;

  


  

  const {mutate , isLoading  }  = useMutation({
    mutationFn : createCabin , 

    onSuccess : () => {
      toast.success("new cabin added")
      reset() 
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      }) 
    }

    , onError : (error) => {
     toast.error(error.message)
    }

  })

  const submitfunc = (data)=>{
    console.log(data);
    mutate(data);
  }

  const  onError = (errors) => {
      console.log(errors);
  }

 

  return (
    <Form onSubmit={handleSubmit(submitfunc , onError)} >

      <FormRow label={"name"} error={errors?.name?.message}  >
        <Input type="text" id="name"  {...register("name" )}/>  
      </FormRow>
        
      <FormRow label={"maxCapacity"} error={errors?.maxCapacity?.message} >
        <Input type="number" id="maxCapacity" { ...register("maxCapacity")}  />
      </FormRow>

      <FormRow label={"regularPrice"} error= {errors?.regularPrice?.message} >
        <Input type="number" id="regularPrice" {...register("regularPrice")}  />
      </FormRow>

      <FormRow label={"discount"}  error={errors?.discount?.message} >
        <Input type="number" id="discount" defaultValue={0} {...register("discount")} />
      </FormRow>

      <FormRow label={"discription"} error={errors?.discription?.message} >
        <Textarea type="number" id="discription" defaultValue=""  {...register("discription")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled ={isLoading} >submit</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
