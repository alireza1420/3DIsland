import React from 'react'

const Alert = (type, text) => {
  return (
   <div className='absolute top-10 left-0 right-0 flex justify-center
   items-center'>
    <div className={`${type==='danger' ? 'bg-red-500': 'bg-blue-500'} p-2 text-indigo-100 
    lg:rounded-full flex lg:inline-flex`} role='alert'>
    <p className='mr-2 text-left'>{text}</p>
    </div>
   </div>
  )
}

export default Alert