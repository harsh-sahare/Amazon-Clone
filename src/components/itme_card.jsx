import React from "react";
import "./item_card.css";
import Shopping_cart from "@material-ui/icons/AddShoppingCart";
import { UseContextValue } from "./dataLayer";

export default function ItmeCard({ title, img, price, rating = 1 }) {
  const [state, dispatch] = UseContextValue();
  return (
    <div className="item_card">
      <div className="title">
        <strong>{title}</strong>
      </div>
      <div className="rating">
        {new Array(rating).fill(null).map(i => {
          return <span style={{ color: "#d2d222" }}>&#9733;</span>;
        })}
      </div>
      <div className="price">
        <strong>$ {price}</strong>
      </div>
      <div
        className="item__card__btn"
        onClick={() =>
          dispatch({
            type: "ADD_IN_BUCKET",
            value: {
              title,
              img,
              price,
              rating
            }
          })
        }
      >
        <Shopping_cart />
      </div>
      <div className="item_img">
        <img src={img} alt={`${title} image`} />
      </div>
    </div>
  );
}
