import React from "react";
import { GetAppState } from "../state";
import { v4 as uuidv4 } from "uuid";

const CartButton = () => {
  const [{ furnitures }, dispatch] = GetAppState();
  // console.log(furnitures);
  return (
    <>
      <li className="nav-item dropdown itemcartbutton">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fa fa-cart-arrow-down fa-1x" aria-hidden="true"></i>
          <span id="notification"> {furnitures.length}</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <table>
            <tr>
              <div className="dropdown-item " id="cartheading">
                <th>Item Name</th>
                <th>Price</th>
              </div>
            </tr>
            <tr>
              {furnitures.map((item, index) => (
                <a className="dropdown-item" href="#" key={uuidv4()}>
                  <td>{item.pname}</td>
                  <td>$ {item.price}</td>
                </a>
              ))}
            </tr>
            <tr>
              <div className="dropdown-item total">
                <td>Total</td>{" "}
                <td>
                  $ {furnitures.reduce((total, obj) => total + obj.price, 0)}
                </td>
              </div>
            </tr>
            <tr>
              <div className="dropdown-item">
                <button type="button" class="btn btn-success placeorder">
                  Place Order
                </button>
              </div>
            </tr>
          </table>
        </div>
      </li>
    </>
  );
};

export default CartButton;
