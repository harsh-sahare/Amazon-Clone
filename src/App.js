import React from "react";
import "./App.css";
import Nav from "./components/nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Cart from "./components/cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/cart">
            <>
              <Nav />
              <Cart />
            </>
          </Route>
          <Route path="/">
            <Nav />
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
