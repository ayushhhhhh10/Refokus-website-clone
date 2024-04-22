import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (
    <div className='w-36 px-4 py-2 text-black bg-zinc-100 rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button