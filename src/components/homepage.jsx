import React from "react";
import "./homepage.css";
import Banner from "./banner";
import Headphones from "../img/headphones.jpg";
import ItmeCard from "./itme_card";
import Nike_shoes from "../img/nike_shoes.jpg";
import Perfume from "../img/perfume.jpg";
import Tv from "../img/Tv.jpg";
import AppleWatch from "../img/apple_watch.jpg";
import IphoneCombo from "../img/iphone_combo.jpg";
import PerfumeForWomen from "../img/perfume_for_women.jpg";

export default function Homepage() {
  return (
    <>
      <Banner />
      <div className="row__container">
        <div className="row">
          <ItmeCard
            title="Wireless Bluetooth Headphones"
            price={20.0}
            img={Headphones}
            rating={1}
          />
          <ItmeCard
            title="Nike Shoes"
            price={50.0}
            img={Nike_shoes}
            rating={5}
          />
          <ItmeCard title="Perfume" price={10.0} img={Perfume} rating={3} />
        </div>
        <div className="row">
          <ItmeCard
            title="Perfume for Women"
            price={25.0}
            img={PerfumeForWomen}
            rating={5}
          />
          <ItmeCard
            title="Iphone Combo"
            price={200.0}
            img={IphoneCombo}
            rating={5}
          />
          <ItmeCard
            title="Apple Watch"
            price={50.0}
            img={AppleWatch}
            rating={5}
          />
        </div>
        <div className="row">
          <ItmeCard title="Television" price={100.0} img={Tv} rating={4} />
        </div>
      </div>
    </>
  );
}
