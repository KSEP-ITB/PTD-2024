"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Assigments",
    path: "/assigments"
  },
  {
    name: "Handbook",
    path: "/handbook"
  },
  {
    name: "Announcement",
    path: "/announcement",
  }
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className='w-full'>
      
      {/* Desktop Nav */}
      <nav className='w-full mx-auto max-w-7xl overflow-x-hidden p-4 flex items-center justify-between z-20'>
        <Link href="/">  
          <h1 className='font-black text-3xl text-orange-gradient text-shadow-orange'>PTD KSEP</h1>
        </Link>

        <div className='flex gap-x-12'>
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.path} className={cn(
                'text-[#B6B6B6] font-bold',
                pathname === item.path && "text-orange-gradient"
              )}>
                {item.name}
              </Link>
            )
          })}
        </div>
        
        <Link href={"/auth/daftar"}>
          <Button variant={"outline"} className='rounded-full border-2 border-[#ED3633] text-[#ED3633]'>
            Daftar
          </Button>
        </Link>
      </nav>

      {/* Mobile Nav */}
    </header>
  )
}

export default Navbar