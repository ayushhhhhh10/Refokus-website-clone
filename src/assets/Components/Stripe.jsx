import React from 'react'

function Stripe({val}) {
  return (
    <div className='stripe flex w-[16.666%] px-6 py-6 items-center justify-between border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-700'>
        <img src={val.url} alt="" />
        <span className='font-medium'>{val.number}</span>
    </div>
  )
}

export default Stripe