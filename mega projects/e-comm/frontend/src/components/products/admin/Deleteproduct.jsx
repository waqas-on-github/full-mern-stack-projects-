import * as S from '../../../css/genral.module.css'
import { NavLink } from "react-router-dom";
import useProducts from '../../../../Apis/product/useProducts';



const Deleteproduct = () => {

  // Using the useQuery hook to fetch data from the "products" endpoint using the productApi.getProducts function.
  const { data, isError, isLoading , error } = useProducts()



if(error) {
  console.log(error);
}

if(isLoading) {
    return <> loading .....</>
}

if(isError) {
    return <> product not found  </>
}


  return (
  <> 
   {/* Check if the fetched data is an array */}
 <div   className={S.Dash_product_page }  >
   {Array.isArray(data) ? (
        data.map((item) => (
          <NavLink  to ={`/dashboard/productInfo/${item._id}`} className= {S.Dash_product} key={item._id}>
            {/* Creating a navigation link to the product details page */}
              {/* Display the product name */}
              <h2>{item?.name}</h2>
              {/* Display the product image */}
              <img
                className={S.img}
                src={item?.photos[0]?.secure_url}
                alt=""
              />


          </NavLink>
         
        ))
      ) : (
        <div>No products found.</div>
      )}
      </div>
    </>
  );
};
  
export default Deleteproduct                                                                                        