import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/cabinApi";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useSearchParams } from "react-router-dom";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
  `;

export default function CabinTable() {
  
  const [searchParams ] = useSearchParams()
    const filterdvalue =  searchParams.get("discount") || "all" ;
    const sortedValue = searchParams.get("sortBy") || 'A-Z';
    
  
  
  
  const  {data , isLoading ,  isError } = useQuery ({
    queryKey :  ['cabins'] , 
    queryFn : getCabins,
  })
  
  
  if(isLoading) {
    return <Spinner/>
  }
  

  let filterdCabins;

  if(filterdvalue==="all") {filterdCabins=data}
  if(filterdvalue==='no-discount'){
    filterdCabins= data.filter((singleCabin) => singleCabin.discount===0)
  }

  if(filterdvalue==='with-discount'){
    filterdCabins= data.filter((singleCabin) => singleCabin.discount>0)
  }

   let sortedCabins = filterdCabins ;
   const [field , sortByValue] = sortedValue.split('-');
   if(field === "name" && sortByValue === "asc"){
    sortedCabins = filterdCabins.sort()
   }
  
  







  if(isError) {
    return <> some thing went wrong !</>
  }

  return (
    <Table> 
     <TableHeader> 
      <div></div>
      <div>Cabin</div>
      <div>Capacity</div>
      <div>Price</div>
      <div>Discount</div>
      <div></div>
     </TableHeader>
      {sortedCabins?.map(cabin => <CabinRow  cabin = {cabin} key={cabin.id}/> ) }
    </Table>
  )
}
