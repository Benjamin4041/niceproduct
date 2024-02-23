import React from 'react'
import {FaStar} from 'react-icons/fa'

export default function Review() {
  return (
    <div className='w-[23em]'>
        <div className='flex justify-center items-center'>
            <FaStar className='text-[#828282]' size={21}/>
            <FaStar className='text-[#828282]' size={21}/>
            <FaStar className='text-[#828282]' size={21}/>
            <FaStar className='text-[#828282]' size={21}/>
            <FaStar className='text-[#828282]' size={21}/>
        </div>
        <p className='mt-[1.3em] mb-[0.63em] text-[#828282] text-left'>I didn’t know instant coffee could taste this good. St33p keeps me stocked and lets me hit full send while adventuring anywhere I can get hot water.</p>
        <p className='text-[#828282] text-center'>John M.</p>
    </div>
  )
}
