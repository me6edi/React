import React from "react";
import Menu from "../component/Menu.jsx";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let { id, name } = useParams();
  return (
    <div>
      <Menu />
      <p>ID:{id}</p>
      <p>Name:{name}</p>
      <h1>This is product page</h1>
    </div>
  );
};

export default ProductPage;
