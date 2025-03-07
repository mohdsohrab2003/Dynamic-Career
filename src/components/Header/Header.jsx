import React from "react";
import "./Header.css";

const Header = ({ handleToggleSilder }) => {
  return (
    <header>
      <a href="#" className="sliderIcon" onClick={handleToggleSilder}>
        <img
          src="src/assets/icons/sliders-solid.svg"
          className="w-[2rem]"
          alt=""
        />
      </a>
      <div className="userItem">
        <div className="avatar">
          <a href="#">
            <img
              // src="src/assets/icons/avatar.svg"
              src="src/assets/icons/avatar.png"
              className="w-[2.5rem] "
              alt=""
            />
          </a>
        </div>
        <div className="darkMode">
          <a href="#">
            <img
              src="src/assets/icons/dark-mode.svg"
              className="w-[2.5rem]"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
