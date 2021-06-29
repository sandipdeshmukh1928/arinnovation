import React from "react";
import { GetAppState } from "../state";

const Modal = () => {
  //dispatch({type:'UPDATE_FUNITURE_STATE',data:{pname,price}})

  const [{ furnitures }, dispatch] = GetAppState();

  return (
    <div id="modal" style={{ display: Shown ? "block" : "none" }}>
      <div className="modal-header">
        <h4 className="modal-title">{pname}</h4>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => setShown(false)}
        >
          Close
        </button>
      </div>
      <div className="modal-body">
        <p className="body-content">{pdesc}</p>
        <div className="buy">
          <button type="button" className="btn btn-primary btn-lg">
            $ {price}
          </button>
          <button
            type="button"
            className="btn btn-warning btn-lg"
            onClick={() => {
              dispatch({
                type: "UPDATE_FURNITURE_STATE",
                data: { pname, price, qty, pdesc },
              });
            }}
          >
            Add to cart
            {/* {JSON.stringify(furnitures)} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
