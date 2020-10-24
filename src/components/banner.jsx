import React, { useState, useEffect } from "react";
import "./banner.css";
import Banner_1 from "../img/banner1.jpg";
import Banner_2 from "../img/banner2.jpg";
import Banner_3 from "../img/banner3.jpg";
import Banner_4 from "../img/banner4.jpg";
import Banner_5 from "../img/banner4.jpg";

export default function Banner() {
  const [banner_count, set_banner_count] = useState(1);
  const [once, set_once] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      set_once(false);
      set_banner_count(banner_count => banner_count + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (banner_count == 5) {
      set_banner_count(1);
    }
  }, [banner_count]);

  return (
    <div className="banner">
      <img
        src={Banner_1}
        className={`banner__1 ${banner_count == 1 &&
          once == false &&
          "banner__show"} ${banner_count == 2 && "banner__hide"} ${once ==
          true && "banner__init"}`}
        alt="banner_imr"
        srcset=""
      />
      <img
        src={Banner_2}
        className={`banner__2 ${banner_count == 2 &&
          "banner__show"}  ${banner_count == 3 && "banner__hide"}`}
        alt="banner_imr"
        srcset=""
      />
      <img
        src={Banner_3}
        className={`banner__3 ${banner_count == 3 &&
          "banner__show"}  ${banner_count == 4 && "banner__hide"}`}
        alt="banner_imr"
        srcset=""
      />
      <img
        src={Banner_4}
        className={`banner__4 ${banner_count == 4 &&
          "banner__show"}  ${banner_count == 5 && "banner__hide"}`}
        alt="banner_imr"
        srcset=""
      />
      <img
        src={Banner_5}
        className={`banner__5 ${banner_count == 5 &&
          "banner__show"}  ${banner_count == 1 &&
          once == false &&
          "banner__hide"}`}
        alt="banner_imr"
        srcset=""
      />
    </div>
  );
}
