import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

const Cabins = () => {
 
  const [show , setshow ] = useState(false)

 const handleClick = () => {
  setshow(!show)
 }


  return (

    <>
    <Row type="horizontal">
      <Heading as="h1"> All Cabins </Heading>
      <p>filter/sort</p>
    </Row>
    <Row> 
      <CabinTable />
    </Row>
      <button onClick={handleClick} >Add  new Cabin </button>
      {show && <CreateCabinForm/>}
    </>
  );
};

export default Cabins;
