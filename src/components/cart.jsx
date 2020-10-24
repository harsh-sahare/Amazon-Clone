import React from "react";
import { UseContextValue } from "./dataLayer";
import Delete from "@material-ui/icons/Delete";
import "./cart.css";

export default function Cart() {
  const [{ cart }, dispatch] = UseContextValue();
  return (
    <>
      <div className="cart">
        <ul className="cart__card__container">
          {cart &&
            cart.map((cart, index) => {
              return (
                <li className="cart__card">
                  <div className="cart__img">
                    <img src={cart.img} alt={`${cart.title} img`} />
                  </div>
                  <div className="cart__detail">
                    <div className="cart__title">{cart.title}</div>
                    <div className="cart__rating">
                      {new Array(cart.rating).fill(null).map(i => {
                        return (
                          <span style={{ color: "#d2d222" }}>&#9733;</span>
                        );
                      })}
                    </div>
                    <div className="cart__price">$ {cart.price}</div>
                    <div className="cart__delete_btn">
                      <Delete
                        onClick={() => {
                          console.log("deleting");
                          dispatch({
                            type: "REMOVE_FROM_BASKET",
                            value: index
                          });
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
        <div className="cart__total_detail">
          <div className="total__items">
            <strong> Total item selected : {cart.length}</strong>
          </div>
          <div className="total__cost">
            <strong>
              Total Price : $ {cart.reduce((num, cart) => cart.price + num, 0)}
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
