import React,{useState} from "react";

function Header(props) {
  const {isOpen, onClickToggle} = props
  
  return (
    <div className={isOpen?"header-box":"header-box hid"}>
      <div className="header-toggle">
        <div 
          onClick={onClickToggle} 
          className={isOpen?
          "flex flex-col items-center justify-center space-y-0.5 header-toggle-wrap open":
          "flex flex-col items-center justify-center space-y-0.5 header-toggle-wrap"
          }
        >
          <div className="header-toggle-item header-toggle-item1"></div>
          <div className="header-toggle-item header-toggle-item2"></div>
          <div className="header-toggle-item header-toggle-item3"></div>
        </div>
      </div>
      <div className="uppercase pb-20 pl-6 flex items-center header-list">
        <ul className="space-y-3">
          <li style={{transitionDelay: "0.15s"}}><span>Home</span></li>
          <li style={{transitionDelay: "0.2s"}}><span>Language & framework</span></li>
          <li style={{transitionDelay: "0.25s"}}><span>Experience</span></li>
          <li style={{transitionDelay: "0.3s"}}><span>Contact</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
