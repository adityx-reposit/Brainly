import React from 'react'

function InputComponent ({onChange,placeholder}:{onChange:()=>void}) {
  return (
    <div>
      <input placeholder={placeholder} type="text" className='px-4 py-2 border rounded m-2' onChange={onChange} />
    </div>
  )
}

export default InputComponent
