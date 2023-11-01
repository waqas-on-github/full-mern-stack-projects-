/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helper";
import { useDeleteCabin } from "./useDeleteCabin";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export default function CabinRow({ cabin }) {
  
  const {mutate , isLoading } = useDeleteCabin()
  const [showEdit , setshowEdit ] = useState(false)

  const { id, discount, image, maxCapacity, name, regularPrice } = cabin;

  return (
    <> 
    <TableRow>
      <Img src={image} />
      <Cabin> {name} </Cabin>
      <div>fits up tp {maxCapacity} guests </div>
      <Price> {formatCurrency(regularPrice)} </Price>
      <Discount> {discount} </Discount>
   <div>
      <button onClick={() => {setshowEdit(!showEdit)}} > edit</button>

      <button disabled={isLoading} onClick={() => mutate(id)}>
        Delete
      </button>
      </div>
    </TableRow>
      {showEdit && <CreateCabinForm editToCabin = {cabin} />}
    </>
  );
}
