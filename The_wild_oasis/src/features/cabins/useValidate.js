import * as yup from "yup";


export const useValidate = () => {

    // input validation
  const schema = yup.object({
    name: yup
      .string()
      .typeError("name must be string")
      .required("name is required"),
    maxCapacity: yup
      .number()
      .typeError("maxCapacity must be number")
      .required("maxCapacity is required")
      .max(200),
    regularPrice: yup
      .number()
      .typeError("regularPrice must be number")
      .required("regularPrice is required")
      .min(100),
    discount: yup
      .number()
      .typeError("discount must be number")
      .required("discount is required")
      .test(
        "lessThanOrEqual",
        "Discount should be less than or equal to regular price",
        function (value) {
          return value <= this.parent.regularPrice;
        }
      ),
    discription: yup.string().required(),
  });

  return (schema)
}