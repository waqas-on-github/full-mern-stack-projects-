/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import FormRow from "../../ui/FormRow";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
import { useValidate } from "./useValidate";
import toast from "react-hot-toast";

const Label = styled.div``;

function CreateCabinForm({ editToCabin = {} }) {
  // props destrctured data
  const { id: editId, ...Editvalues } = editToCabin;

  // custom hookes
  const { mutateCreate, isLoading } = useCreateCabin();
  const { mutateEdit, isEditLoading } = useEditCabin();
  const schema = useValidate();

  // forms related funcations
  const { register, handleSubmit, reset, formState, control } = useForm({
    defaultValues: editId ? Editvalues : {},
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const submitfunc = (data) => {
    const image = typeof data.image === "string" ? data.image : data?.image[0];
    if (editId) {
      mutateEdit(
        { ...data, image, id: editId },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    }

    mutateCreate(
      { ...data, image: image },
      {
        onSuccess: (data) => {
          reset();
        },
      }
    );
  };

  const onError = (errors) => {
    console.log(errors);
    toast.error(errors.message);
  };

  const isWorking = isLoading || isEditLoading;

  // jsx
  return (
    <>
      <Form onSubmit={handleSubmit(submitfunc, onError)}>
        <FormRow label={"name"} error={errors?.name?.message}>
          <Input type="text" id="name" {...register("name")} />
        </FormRow>

        <FormRow label={"maxCapacity"} error={errors?.maxCapacity?.message}>
          <Input type="number" id="maxCapacity" {...register("maxCapacity")} />
        </FormRow>

        <FormRow label={"regularPrice"} error={errors?.regularPrice?.message}>
          <Input
            type="number"
            id="regularPrice"
            {...register("regularPrice")}
          />
        </FormRow>

        <FormRow label={"discount"} error={errors?.discount?.message}>
          <Input
            type="number"
            id="discount"
            defaultValue={0}
            {...register("discount")}
          />
        </FormRow>

        <FormRow label={"discription"} error={errors?.discription?.message}>
          <Textarea
            type="number"
            id="discription"
            defaultValue=""
            {...register("discription")}
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="image">Cabin photo</Label>
          <FileInput
            id="image"
            accept="image/*"
            type="file"
            {...register("image", {
              required: editId ? false : "image is required ",
            })}
          />
        </FormRow>

        <FormRow>
          {/* type is an HTML attribute! */}
          <Button variation="secondary" type="reset">
            Cancel
          </Button>
          <Button disabled={isWorking}>{editId ? "edit" : "submit"}</Button>
        </FormRow>
      </Form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
}

export default CreateCabinForm;
