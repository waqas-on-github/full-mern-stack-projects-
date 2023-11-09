/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { DevTool } from '@hookform/devtools';
import { useSettingUpdate } from './usesSettingUpdate';
import { yupResolver } from "@hookform/resolvers/yup";
import { useValidate } from './useValidate';

function UpdateSettingsForm({data}) {
  
const {schema} = useValidate()

// getting data from setting api 
const values = {
breakfastPrice: data?.breakfastPrice,
maxBookingLength: data?.maxBookingLength, 
maxGusetsperBooking: data?.maxGusetsperBooking,
minBookingLength: data?.minBookingLength

}
// data validation 

const {register, handleSubmit,  formState, control } = useForm({
   defaultValues :  values, 
   resolver : yupResolver(schema)
})


  // console.log(data);
const {errors} = formState


const {mutate} = useSettingUpdate()
const submitfunc = (data) => {
    mutate(data , {
      onSuccess : (data) => { 
        console.log(data);
      }
    });

  }

const onError = () => {console.log(errors);}

  return (
    <>
    <Form onSubmit={handleSubmit(submitfunc , onError)} >
      <FormRow label='Minimum nights/booking' error={errors?.minBookingLength?.message} >
        <Input type='number' id='minBookingLength' {...register("minBookingLength")}  />
      </FormRow>
      <FormRow label='Maximum nights/booking' error={errors?.maxBookingLength?.message} >
        <Input type='number' id='maxBookingLength'  {...register("maxBookingLength")}/>
      </FormRow>
      <FormRow label='Maximum guests/booking' error={errors?.maxGusetsperBooking?.message} >
        <Input type='number' id='maxGusetsperBooking' {...register("maxGusetsperBooking")} />
      </FormRow>
      <FormRow label='Breakfast price' error={errors?.breakfastPrice?.message} >
        <Input type='number' id='breakfastPrice' {...register("breakfastPrice")} />
      </FormRow>

      <button>update</button>
    </Form>
    <DevTool control={control}/>
    </>
  );
}

export default UpdateSettingsForm;
