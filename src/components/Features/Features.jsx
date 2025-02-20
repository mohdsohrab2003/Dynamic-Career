import React from 'react'
import FeaturesCom1 from './FeaturesCom1'
import FeaturesCom2 from './FeaturesCom2'
import FeaturesCom3 from './FeaturesCom3'

const Features = () => {
  return (
    <>
    <div className=" w-[85%] -mt-[7.7rem]  m-auto conatainer-features">
        <div className=' items-center  text-center mb-[3rem] our-features'>
            <div className='text-4xl mb-8 font-semibold'>Our <span className='text-[#3BB0FF]'> Features</span></div>
            <p className='font-serif' >This very extraordinary feature, can make learning activities more efficient</p>

        </div>
        {/* features components  */}
        <div className="features-comp">
            <FeaturesCom1/>
            <FeaturesCom2/>
            <FeaturesCom3/>
        </div>
    </div>
    </>
  )
}

export default Features
