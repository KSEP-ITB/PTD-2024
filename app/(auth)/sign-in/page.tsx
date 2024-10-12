import React from 'react'
import Image from 'next/image'
import Background from '@/public/SignInBackground.png'

const SignInPage = () => {
  return (
    <div className='relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#ED462D] to-[#FD8F10]'>

      

      {/* BACKGROUND */}
      <Image 
        src={Background}
        alt='Star Background'
        className='absolute w-full h-[600px] translate-y-[40px]'
      />
    </div>
  )
}

export default SignInPage