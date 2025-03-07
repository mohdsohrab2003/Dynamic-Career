import React, { useState } from "react";
import "./DashBoardHome.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import Header from "../../components/Header/Header";
const DashBoardHome = () => {
  const [toggleSider, setToggleSider] = useState(false);
  const handleToggleSilder = () => {
    setToggleSider(!toggleSider);
  };

  return (
    <>
      <main>
        <SideMenu toggleSider={toggleSider} />
        <div className={`banner ${toggleSider ? "active" : undefined}`}>
          <Header handleToggleSilder={handleToggleSilder} />
        </div>
      </main>
    </>
  );
};

export default DashBoardHome;
