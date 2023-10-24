import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";

const Cabins = () => {

  return (
    <>
    <Row type="horizontal">
      <Heading as="h1"> All Cabins </Heading>
      <p>filter/sort</p>
    </Row>
    <Row> 

      <CabinTable />
    </Row>

    </>
  );
};

export default Cabins;
