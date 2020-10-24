import React, { useContext } from "react";
import "./nav.css";
import AmazonLogo from "../img/amazon_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import CartIcon from "@material-ui/icons/ShoppingCart";
import { UseContextValue } from "./dataLayer";
import { useHistory } from "react-router-dom";

export default function Nav() {
  const history = useHistory();
  const [{ cart }, dispatch] = UseContextValue();
  return (
    <div className="nav">
      <img
        src={AmazonLogo}
        alt=""
        className="nav__logo"
        onClick={() => history.push("/")}
      />
      <div className="nav__search_bar">
        <input type="text" placeholder="Search" />
        <div className="search__btn">
          <SearchIcon />
        </div>
      </div>
      <div className="nav__coloum">
        <div className="nav__row_1">Hello, User</div>
        <div className="nav__row_2">Sign in</div>
      </div>
      <div className="nav__coloum nc-2">
        <div className="nav__row_1">Return</div>
        <div className="nav__row_2">& Orders</div>
      </div>
      <div className="nav__coloum nc-3">
        <div className="nav__row_1">Try</div>
        <div className="nav__row_2">Prime</div>
      </div>
      <div className="nav__cart" onClick={() => history.push("/cart")}>
        <CartIcon />
        <strong>{cart.length}</strong>
      </div>
    </div>
  );
}
