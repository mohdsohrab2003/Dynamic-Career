import React from "react";
import heroImg from "../../assets/images/hero-img.png";

const Hero = () => {
    return (
        <div className="flex justify-between items-center w-[90%] m-auto -mt-20 left-16 gap-2 px-10 py-12 hero relative">
            {/* Left Section */}
            <div className="hero-left p-6  max-w-lg">
                <h1 className="leading-tight font-semibold text-[max(.6vw,45px)] max-w-[35rem] mb-6">
                    India's <span className="text-[#3BB0FF]">Trusted & Affordable</span> Career Counselling Platform
                </h1>
                <p className="text-[max(.5vw,15px)] max-w-[30rem]">
                    Unlock your life journey with your Dynamic Career. We provide the best and most trusted solutions.
                </p>
                <button className="mt-5 bg-[#3BB0FF] py-3 px-6 text-xl text-white rounded-xl transition duration-300 hover:bg-[#4741e5]">
                    Get Started
                </button>
            </div>

            {/* Right Section */}
            <div className="hero-right">
                <img src={heroImg} alt="Hero" className="max-w-[50rem] ml-5 items-center" />
            </div>
        </div>
    );
};

export default Hero;













{/* <div className=" bg-[#f3f3f3] flex justify-around -mt-[1rem] w-[95%]  m-auto hero">
        <div className="hero-left  p-6 mt-[5rem] ml-[8rem] mx-8">
            <h1 className=' leading-tight font-semibold text-[max(.6vw,45px)] max-w-[35rem] mb-[2rem]' >India's  
                <span className="text-[#3BB0FF]"> Trusted  &  Affordable</span> Carrer  Counselling  Platform</h1>
            <p className=" text-[max(.5vw,15px)] max-w-[30rem]" >Unlock Your life journey with your Dyanmic Career,it’s provide best and trusted soltuion.</p>
            <button className='mt-5 bg-[#3BB0FF] py-[12px] items-center px-[20px] text-xl text-[#fff] rounded-xl'>Get Started</button>
        </div>
        <div className="hero-right">
            <img src={heroImg} alt="" className="w-[80rem] -mt-[9rem] ml-[1rem] items-center " />
        </div>
    </div> */}




    // import React from 'react'
// import heroImg from '../../assets/images/hero-img.png';
// const Hero = () => {
//   return (
//     <>
    
//     <div className=" flex justify-between items-center -mt-[10rem] w-[90%] m-auto left-10  gap-2 px-10 py-12 hero relative">
//   <div className="hero-left p-6 mt-2 max-w-lg">
//     <h1 className="leading-tight font-semibold text-[max(.6vw,45px)] max-w-[35rem] mb-[2rem]">
//       India's <span className="text-[#3BB0FF]">Trusted & Affordable</span> Career Counselling Platform
//     </h1>
//     <p className="text-[max(.5vw,15px)] max-w-[30rem]">
//       Unlock your life journey with your Dynamic Career. We provide the best and most trusted solutions.
//     </p>
//     <button className="mt-5 bg-[#3BB0FF] py-3 px-6 text-xl text-white rounded-xl">
//       Get Started
//     </button>
//   </div>
//   <div className="hero-right">
//     <img src={heroImg} alt="" className="max-w-[50rem] ml-5 items-center" />
//   </div>
// </div>

//     </>
//   )
// }

// export default Hero
