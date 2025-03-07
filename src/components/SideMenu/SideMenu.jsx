import React, { useState } from "react";
import "./SideMenu.css";
import LogoImg from "../../assets/images/brand-logo.png";
import sidenav from "../../Store/sideMenuNavList.js";

import studentIcon from "../../assets/icons/student.svg";
import parentIcon from "../../assets/icons/parent.svg";
import teacherIcon from "../../assets/icons/hugeicons--teacher.svg";
import facebookIcon from "../../assets/icons/icons8-facebook-logo.svg";
import instagramIcon from "../../assets/icons/icons8-instagram-logo.svg";
import youtubeIcon from "../../assets/icons/icons8-youtube.svg";
import logoutIcon from "../../assets/icons/arrow-right-from-bracket-solid.svg";

const SideMenu = ({ toggleSider }) => {
  const sideNavListData = [
    {
      _id: 1,
      target: "student",
      name: "Student",
      icon: studentIcon,
      active: true,
    },
    {
      _id: 2,
      target: "parents",
      name: "Parents",
      icon: parentIcon,
      active: false,
    },
    {
      _id: 3,
      target: "teacher",
      name: "Teacher",
      icon: teacherIcon,
      active: false,
    },
  ];

  return (
    <>
      <div className={`sideMenu ${toggleSider ? "active" : undefined}  `}>
        {/* Logo Side Nav Bar */}
        <div className="sideMenuLogo  ">
          <a href="/" className="logo ">
            <img src={LogoImg} className="" alt="" />
            <h1 className="brandName">Dynamic Career</h1>
          </a>
        </div>
        {/* Navigation List SideNav Bar */}
        <ul className="sideNav">
          {sideNavListData.map((item) => {
            return (
              <li className="sideNavlist">
                <a href="#" key={item._id}>
                  <img src={item.icon} alt="" />
                  <h2 className="navName">{item.name}</h2>
                </a>
              </li>
            );
          })}
        </ul>
        {/* Navigation sideNav bar  bottom Social media and log out */}
        <ul className="social">
          <li>
            <a href="#">
              <img src={facebookIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagramIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={youtubeIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <img src={logoutIcon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
