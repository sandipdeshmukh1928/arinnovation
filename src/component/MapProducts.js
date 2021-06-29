import React from "react";
import { GetAppState } from "../state";
import Product from "./Product";

const MapProducts = () => {
  const [{ displayArea }, dispatch] = GetAppState();
  console.log(displayArea);
  return (
    <div>
      {displayArea.map((product) => {
        return <Product src={product.link} title={product.title} />;
      })}
    </div>
  );
};
export default MapProducts;
