import React from 'react'
import Image from 'next/image'
import KSEPLogo from '@/app/assets/KSEPLogo.png'
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const socialMediaItems = [
  // {
  //   name: 'TikTok'
  //   logo: 
  //   path: '' 
  // },
  {
    name: 'Instagram',
    logo: Instagram,
    path: '' 
  },
  {
    name: 'YouTube',
    logo: Youtube,
    path: '' 
  },
  {
    name: 'LinkedIn',
    logo: Linkedin,
    path: '' 
  },
]

const Footer = () => {
  return (
    <div className='wrapper flex flex-col items-center gap-y-12'>
      <div className='flex items-center gap-x-4'>
        <Image 
          src={KSEPLogo}
          alt='Logo KSEP'
          width={48}
          height={48}
        />
        <h5 className='text-orange-gradient font-bold text-2xl'>Kelompok Studi Ekonomi dan Pasar Modal</h5>
      </div>
      <div className='flex flex-col gap-y-4 items-center'>
        <p className='text-center text-orange-gradient'>Our Social Media</p>
        <div className='flex gap-x-20'> 
          {socialMediaItems.map((item, index) => {
            const Icon = item.logo
            return (
              <Link key={index} href={item.path}>
                <Icon className='w-10 h-10 text-[#ED5126]' />
              </Link>
            )
          })}
        </div>
      </div>
      <p className='font-bold text-[#ED5126] text-center text-xl'>
        © 2024 Kelompok Studi Ekonomi dan Pasar Modal ITB. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer