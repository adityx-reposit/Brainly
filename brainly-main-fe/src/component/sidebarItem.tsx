import React, { ReactElement } from 'react'

const SidebarItem = ({text,Icon}:{
    text:string;
    Icon:ReactElement;

}) => {
  return (
    <div className='hover:bg-blue-500  flex pl-4 text-gray-600'>
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
