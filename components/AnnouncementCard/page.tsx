"use client"
import React from 'react'

type Data = {
  title: string;
  content: string;
};

export default function AnnouncementCard({title, content}: Data) {
  return (
    <div className='bg-gradient-to-b from-[#CF9FC8] to-[#A74899] rounded-3xl border-[3px] border-white mb-5 p-10 text-white'>
      <div className='font-bold text-lg mb-5'> {title} </div>
      <div className='overflow-x-auto'> {content} </div>
    </div>
  )
}