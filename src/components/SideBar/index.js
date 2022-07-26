import Facebook from "asset/icon/facebook";
import Github from "asset/icon/github";
import Instagram from "asset/icon/instagram";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import { easeQuadInOut, easeLinear, easeCubicInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import LineProcessBar from "./lineProcessBar";
import Check from "asset/icon/check";

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
        <div className="text-sm text-zinc-400 position">
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
        <div className="p-4 space-x-8 flex items-center justify-center language">
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={66}
              duration={1.4}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      pathColor: "#FFC107",
                      trailColor: "#191923",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <p className="pt-2 text-center">English</p>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={66}
              duration={1.4}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      pathColor: "#FFC107",
                      trailColor: "#191923",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <p className="pt-2 text-center">English</p>
          </div>
        </div>
        <hr />
        <div className="py-6 space-y-4 w-100 code-language">
          <div className="w-100">
            <LineProcessBar name="html" percent={90} />
          </div>
          <div className="w-100">
            <LineProcessBar name="css" percent={95} />
          </div>
          <div className="w-100">
            <LineProcessBar name="javascript" percent={75} />
          </div>
          <div className="w-100">
            <LineProcessBar name="java" percent={70} />
          </div>
        </div>
        <hr />
        <div className="py-4 space-y-1 w-100 framework-library">
          <div className="flex items-center">
            <Check color="#FFC107" />
            <span className="pl-2 text-zinc-500">React, Redux, Saga, Vue</span>
          </div>
          <div className="flex items-center">
            <Check color="#FFC107" />
            <span className="pl-2 text-zinc-500">Bootstrap, Tailwind, MUI, antd</span>
          </div>
          <div className="flex items-center">
            <Check color="#FFC107" />
            <span className="pl-2 text-zinc-500">Sass, Css module,</span>
          </div>
          <div className="flex items-center">
            <Check color="#FFC107" />
            <span className="pl-2 text-zinc-500">Git knowledge</span>
          </div>
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
