import React from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import * as productApi from "../../../fetchstore/fetchProduct.js";

const Proudct = () => {
  const { data, isError, isLoading } = useQuery(
    ["products", "hello"],
    productApi.getProducts
  );
  console.log(data);

  if (isLoading) {
    return <>loading ...</>;
  }

  if (isError) {
    return <>something went wrong</>;
  }

  return (
    <>
      {Array.isArray(data) ? (
        data.map((item) => (
          <div key={item._id}>
            <NavLink
              to={`/products/details/${item._id}`}
              className="border w-[1000px] p-10 flex flex-col gap-5"
            >
              <h2>{item?.name}</h2>
              <img
                className="w-[500px]"
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
