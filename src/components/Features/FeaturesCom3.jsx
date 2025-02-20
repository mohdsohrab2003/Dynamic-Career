import React from 'react'
import ourf1 from '../../assets/images/ourf1.png';

const FeaturesCom3 = () => {
  return (
  <div className=" flex justify-between mt-[2rem] ml-[3.5rem] items-center features2-container">
       <div className="w-[480px] features  ">
            <img src={ourf1} alt="Example" className="w-full" />
        </div>
        <div className="features-left max-w-[50%]">
        <h2 className="text-2xl font-semibold ">
        <span className='text-[2F327D]'>Providing</span> <span className='text-[#3BB0FF]'> Scholarship </span>
         </h2>
     <p className="mt-4 text-black text-xl text-justify leading-relaxed">
     Recognizing talent and hard work, we offer merit-based scholarships to deserving individuals. Our financial assistance programs are designed to support education and career growth, helping students and professionals focus on their future without financial burdens. By encouraging innovation and learning through funding opportunities, we strive to create a brighter and more accessible future for aspiring individuals.
     </p>
        </div>
  </div>
  
  )
}

export default FeaturesCom3
