import React from 'react'
import { Button } from './ui/button'

const Card = ({ HBDay, HBTitle }: { HBDay: string, HBTitle: string }) => {
  return (
    <div className='border-2 rounded-2xl bg-gradient-to-tr from-[#0F389B] to-[#8CAAF4] my-[2vw] px-[4vw] py-[2vw] flex flex-col'>
      <h3 className='font-semibold text-white text-[1.5vw]'>{HBDay}</h3>
      <h1 className='font-bold text-white text-[3vw] mb-[2vw]'>{HBTitle}</h1>
      <Button variant="secondary" className="text-[#0F389B] font-semibold text-[1.5vw]">
        Open
      </Button>
    </div>  
  )
}

export default Card
