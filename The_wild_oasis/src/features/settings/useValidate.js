import * as yup from "yup";


export  const useValidate = () => {

const schema = yup.object({
    breakfastPrice : yup.number().typeError("must be number"),
    maxBookingLength:yup.number().typeError("must be number"),
    maxGusetsperBooking:yup.number().typeError("must be number"), 
    minBookingLength :yup.number().typeError("must be number")
  
  
  })

  return {schema}
}