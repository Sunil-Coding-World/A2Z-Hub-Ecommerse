import React from "react";
import NavBar from "../features/navbar/NavBar";
import ProductList from "../features/Product/components/ProductList";
import Paging from "../features/Pagination/Paging";

const HomePage = () => {
  return (
    <div>
      <NavBar>          
        <ProductList>
        </ProductList>
        <div className=" m-4">
        <Paging />
        </div>
      </NavBar>
    </div>
  );
};

export default HomePage;
