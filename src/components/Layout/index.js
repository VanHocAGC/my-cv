import Header from "components/Header";
import SideBar from "components/SideBar";
import React from "react";

function Layout(props) {
  return (
    <div className="layout-container">
      <div className="h-full w-100 bg-sky-200 layout-inner">
        <Header />
        <SideBar />
      </div>
    </div>
  );
}

export default Layout;
