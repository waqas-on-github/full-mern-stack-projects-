import { useParams } from "react-router-dom"


const ProductInfo = () => {
  const {id} = useParams()
  console.log(id);
// todo make this updatable for admin  dated 27aug /2023  

  return (
    <div>ProductInfo</div>
  )
}

export default ProductInfo