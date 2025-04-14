import React from 'react'
import { Button } from './button'

const shareBrain = () => {
  
    
  return (
    <div>
      <div className=' flex bg-gray-500 w-screen h-screen'>
            <div className='bg-white p-4 '>
                <input type="text" readOnly></input>
                <Button variant='primary' text='Copy' size='md'></Button>
            </div>
      </div>
    </div>
  )
}

export default shareBrain
