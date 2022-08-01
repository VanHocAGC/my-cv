import Chevronright from "asset/icon/chevronright";
import Chevrontleft from "asset/icon/chevrontleft";
import React, { useEffect, useRef } from "react";
import Typical from "react-typical";
function Content(props) {
  return (
    <div className="content-wrap">
      <div className="home-section">
        <div className="flex justify-center background-wrap">
          <div className="flex flex-col justify-center space-y-6 trailer-wrap">
            <h3 className="text-white font-extrabold">Discover my Amazing Information!</h3>
            <div className="flex typical-trailer">
              <span className="flex items-center font-medium auto-typical-wrap">
                <span><Chevrontleft/></span>
                code 
                <span><Chevronright/></span>
              </span>
              <Typical
                steps={[
                  "I Build Font-end Web Application!",
                  4000,
                  "I Build Back-end Web Application!",
                  4000,
                  "I Build Font-end With ReactJs!",
                  4000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
              <span className="flex items-center font-medium auto-typical-wrap">
                <span className="flex text-white items-center"><Chevrontleft/>/</span>
                code 
                <span><Chevronright/></span>
              </span>
            </div>
            <button className="font-semibold uppercase text-xs w-fit">explore now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
