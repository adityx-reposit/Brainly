import React from 'react'

function Input ({reference ,placeholder}:{placeholder:string; reference?:any}) {
  return (
    <div>
      <input ref={reference } placeholder={placeholder} type="text" className='px-4 py-2 border rounded m-2'  />
    </div>
  )
}

export default Input
