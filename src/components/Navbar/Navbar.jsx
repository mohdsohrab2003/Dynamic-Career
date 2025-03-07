
import { useState } from "react";
import navList from "../../Store/navMenulist";
import NavMenuList from "./NavMenuList";
import brandLogo from "../../assets/images/brand-logo.png"; // Import the logo correctly
import {  useNavigate } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
    const [navData] = useState(navList);
    // const navigate = useNavigate();
    // const handleNavigate = () => {
    //     navigate('/dashboard-home');
    //   };

    return (
        <nav className="w-full h-[110px] -mt-2 fixed top-0 left-0 right-0 bg-white shadow-[0_4px_6px_-2px_rgba(0,0,0,0.2)] z-50">
            <div className="flex justify-between w-[92%] m-auto z-40 items-center py-4">
                {/* Logo Section */}
                <div className="flex items-center ml-12 text-2xl">
                    <a href="/" className="flex items-center">
                        <img src={brandLogo} className="w-[100px]" alt="Brand Logo" />
                        <h1 className="-ml-10 font-medium">Dynamic Career</h1>
                    </a>
                </div>

                {/* Navigation Menu */}
                <div className="nav-menu">
                    <ul className="flex justify-between gap-12 items-center">
                        {navData.map((item) => (
                            <NavMenuList key={item._id} item={item} />
                        ))}
                    </ul>
                </div>

                {/* Login/Register Button */}
                <div className="mr-12">
                    <button className="bg-[#3BB0FF] text-white py-3 px-5 rounded-md cursor-pointer transition duration-300 hover:bg-indigo-600"  >
                        Login/Register
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

