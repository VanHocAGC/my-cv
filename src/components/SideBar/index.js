import Facebook from "asset/icon/facebook";
import Github from "asset/icon/github";
import Instagram from "asset/icon/instagram";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

function SideBar(props) {
  const percentage = 50;
  return (
    <div className="sidebar-container">
      <div className="w-100 flex flex-col items-center text-white sidebar-infor">
        <div className="bg-red-300 relative rounded-full avatar">
          <div className="image"></div>
          <div className="bg-yellow-300 absolute rounded-full online-sign"></div>
        </div>
        <div className="py-2 text-lg font-semibold name"> Văn Học</div>
        <div className="text-sm text-stone-400 position">
          Front-end Developer
        </div>
      </div>
      <div className="text-white sidebar-content-center">
        <div className="w-100 py-4 font-medium location">
          <div className="flex items-center justify-between pb-1">
            <h6>Residence:</h6>
            <span className="text-sm font-light text-gray-400">Viet Nam</span>
          </div>
          <div className="flex items-center justify-between pb-1">
            <h6>City:</h6>
            <span className="text-sm font-light text-gray-400">
              Thua Thien Hue
            </span>
          </div>
          <div className="flex items-center justify-between pb-1">
            <h6>Age:</h6>
            <span className="text-sm font-light text-gray-400">22</span>
          </div>
        </div>
        <hr />
        <div className="py-4 bg-orange-400 language">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={66}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              console.log(value);
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar value={value} text={`${roundedValue}%`} />
              );
            }}
          </AnimatedProgressProvider>
        </div>
        <hr />
      </div>
      <div className="sidebar-content-footer">
        <Instagram />
        <Facebook />
        <Github />
      </div>
    </div>
  );
}

export default SideBar;
