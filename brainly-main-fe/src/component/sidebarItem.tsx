import React, { ReactElement } from 'react'

const SidebarItem = ({text,Icon}:{
    text:string;
    Icon:ReactElement;

}) => {
  return (
    <div className='hover:bg-gray-100  flex pl-4 text-gray-600'>
        <div className='p-2 '>

         {Icon}
        </div>
        <div className='p-2'> 
        {text}
        </div>
    </div>
  )
}

export default SidebarItem
