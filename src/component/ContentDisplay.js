import React, { useState } from "react";
import "./ContentDisplay.css";
import { GetAppState } from "../state";

const ContentDisplay = () => {
  const [{ rawdata }, dispatch] = GetAppState();

  const clicked = (id) => {
    return dispatch({ type: "ADD_TO_DISPLAY_AREA", data: id });
  };

  return (
    <>
      <div className="components">
        {rawdata.map((product) => (
          <div class="item" id="item1" onClick={() => clicked(product.id)}>
            <img src={product.thumbnail} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentDisplay;
