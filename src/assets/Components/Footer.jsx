import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 flex items-center'>
        <div className='left w-1/2'>
            <h1 className='text-[13vw] font-medium leading-none tracking-tight'>refokus.</h1>
            <div className='flex gap-10 text-sm font-[200] text-zinc-500 mt-10 cursor-pointer'>
                {["Privacy Policy","Cookie Policy","Impressum","Terms"].map((value,index)=><a key={index} className='hover:text-zinc-100'>{value}</a>)}
            </div>
        </div>
        <div className='right w-1/2 flex flex-col items-end'>
            <p className='w-56 text-end font-medium text-sm'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img className='mt-5' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg" alt="" />
        </div>
    </div>
  )
}

export default Footer