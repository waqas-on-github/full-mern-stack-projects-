import { NavLink } from "react-router-dom";
import * as  S from '../../css/genral.module.css'
import useProducts from "../../../Apis/product/useProducts.js";

const Proudct = () => {
  // Using the useQuery hook to fetch data from the "useTroducts" hook
    const {data , isLoading , isError} = useProducts()


  // Check if the data is still loading
  if (isLoading) {
    return <>loading ...</>;
  }

  // Check if there was an error while fetching the data
  if (isError) {
    return <>something went wrong</>;
  }

  return (
    <>
      {/* Check if the fetched data is an array */}
      {Array.isArray(data) ? (
        data.map((item) => (
          <div key={item._id}>
            {/* Creating a navigation link to the product details page */}
            <NavLink
              to={`/products/details/${item._id}`}
              className="border w-[1000px] p-10 flex flex-col gap-5"
            >
              {/* Display the product name */}
              <h2>{item?.name}</h2>
              {/* Display the product image */}
              <img
                className={S.img}
                src={item?.photos[0]?.secure_url}
                alt=""
              />
            </NavLink>
          </div>
        ))
      ) : (
        <div>No products found.</div>
      )}
    </>
  );
};

export default Proudct;
