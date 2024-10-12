"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react'

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
  const { data } = useSession();
  const pathname = usePathname()

  return (
    <header className='w-full'>
      
      {/* Desktop Nav */}
      <nav className='w-full mx-auto max-w-7xl overflow-x-hidden p-4 hidden lg:flex items-center justify-between z-20'>
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
        
        {data && (
          <Button onClick={() => {signOut()}}>
            SignOut
          </Button>
        )}
        <Link href={"/sign-in"}>
          <Button variant={"outline"} className='rounded-full border-2 border-[#ED3633] text-[#ED3633] hover:text-[#ED3633]/80'>
            Sign In
          </Button>
        </Link>
      </nav>

      {/* Mobile Nav */}
      <div className='lg:hidden flex wrapper items-center justify-between'>
        <Link href="/">  
          <h1 className='font-black text-3xl text-orange-gradient text-shadow-orange'>PTD KSEP</h1>
        </Link>
        <Sheet>
          <SheetTrigger>
            <Menu className='text-[#ED3633]' />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-center justify-center gap-y-8'>
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
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar