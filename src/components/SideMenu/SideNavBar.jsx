import React from "react";

const SideNavBar = ({ item }) => {
  return (
    <>
      <li className="">
        <a href="#">
          <img src={item.icons} alt="" />
          <span>{item.name}</span>
        </a>
      </li>
    </>
  );
};

export default SideNavBar;
