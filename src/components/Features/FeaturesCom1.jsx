import React from 'react'
import ourf1 from '../../assets/images/ourf1.png';
import l1 from '../../assets/images/l1.png';
import l2 from '../../assets/images/l2.png';
import l3 from '../../assets/images/l3.png';


const FeaturesCom1 = () => {
  return (
    
        
      
    
 
    <div className="flex justify-between items-center gap-5  features-1">
  {/* Left Side - Image */}
  <div className="features-left">
    <div className="w-[480px] featues-img">
      <img src={ourf1} alt="Career Guidance" />
    </div>
  </div>

  {/* Right Side - Content */}
  <div className="text-left features-right">
    <h2 className="text-2xl font-semibold">
      For Your <span className="text-[#3BB0FF]">Journey</span>
    </h2>

    <div className="content space-y-6 mt-4">
      {/* Row 1 */}
      <div className="flex items-center gap-4">
        <img src={l1} className="w-[60px]" alt="Icon 1" />
        <p className="text-lg">
          Personalized career guidance to help you navigate your professional path.
        </p>
      </div>

      {/* Row 2 */}
      <div className="flex items-center  gap-4">
        <img src={l2} className="w-[60px]" alt="Icon 2" />
        <p className="text-lg">Opportunities to explore and grow in diverse career fields.</p>
      </div>

      {/* Row 3 */}
      <div className="flex items-center   gap-4">
        <img src={l3} className="w-[60px]" alt="Icon 3" />
        <p className="text-lg">Support at every stage to ensure a smooth and successful journey.</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default FeaturesCom1
