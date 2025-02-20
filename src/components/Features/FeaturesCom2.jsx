import React from 'react'
import ourf1 from '../../assets/images/ourf1.png';
const FeaturesCom2 = () => {
  return (
    <div className=" flex justify-between mt-[2rem] ml-[3.5rem] items-center features2-container">
        <div className="features-left max-w-[50%]">
        <h2 className="text-2xl font-semibold ">
              <span className='text-[#3BB0FF]'> Benefits </span>    and   Support
         </h2>
     <p className="mt-4 text-black text-xl text-justify leading-relaxed">
        We believe that success comes with the right support and environment. Our mentorship programs provide 
        professional development opportunities, while our flexible and growth-oriented work culture ensures a 
        balance between learning and execution. With career counseling, job placement assistance, and exclusive 
        resources, we empower you to achieve your career goals efficiently.
     </p>
        </div>
        <div className="w-[480px] features  ">
            <img src={ourf1} alt="Example" className="w-full" />
        </div>
  
  
</div>

  )
}

export default FeaturesCom2
