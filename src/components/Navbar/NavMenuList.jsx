import React from 'react'

const NavMenuList = ({item}) => {
  return (
    <>

    <li className='text-[20px] font-medium hover:text-[#4741e5] '>
      <a href="#">
        <span className='brand-name'>{item.name}</span>
      </a>
    </li>
      
    </>
  )
}

export default NavMenuList
