import { useState } from "react";
import Features from "../../components/Features/Features"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import LoginPopup from "../../components/LoginPopup/LoginPopup";


const Home = () => {
  return (
    <>
    <Navbar  />
    
    <div className="">
    <Hero />
    </div>
    <Features/>
    
    
    
    </>
  )
}

export default Home
