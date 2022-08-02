import Header from "components/Header";
import Content from "components/Maincontent";
import SideBar from "components/SideBar";
import React,{useState} from "react";

function Layout(props) {
  const [isOpen,setIsOpen] = useState(false)
  const toggleTrigger = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="layout-container">
      <div className="h-full w-100 layout-inner">
        <Header isOpen={isOpen} onClickToggle={toggleTrigger}/>
        <SideBar />
        <Content isShowSideBar={isOpen}/>
      </div>
    </div>
  );
}

export default Layout;
