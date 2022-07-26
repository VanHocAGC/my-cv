import Header from "components/Header";
import SideBar from "components/SideBar";
import React,{useState} from "react";

function Layout(props) {
  const [isOpen,setIsOpen] = useState(false)
  const toggleTrigger = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="layout-container">
      <div className="h-full w-100 bg-sky-200 layout-inner">
        <Header isOpen={isOpen} onClickToggle={toggleTrigger}/>
        <SideBar />
      </div>
    </div>
  );
}

export default Layout;
