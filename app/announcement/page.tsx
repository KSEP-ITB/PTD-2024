import React from 'react'
import Image from 'next/image'
import Dice from '@/app/assets/Dice1.png'
import Sparkle from '@/app/assets/StarShining.png'
import AnnouncementCard from '@/components/AnnouncementCard/page'

type Data = {
  title: string;
  content: string;
};
const Data = [
  {
    title: "New Product Release Announcement",
    content: "We are excited to announce the release of our latest product, which offers innovative solutions for your business."
  },
  {
    title: "💸 𝐌𝐚𝐫𝐤𝐞𝐭 𝐑𝐞𝐯𝐢𝐞𝐰 : 𝐒𝐢𝐱-𝐌𝐨𝐧𝐭𝐡 𝐌𝐚𝐫𝐤𝐞𝐭 𝐑𝐞𝐜𝐚𝐩 💸",
    content: "Haloo massa KSEP👋 Udah lama nih kita ga market review, tentunya kalian semua butuh informasi market buat prospek kedepannya biar porto makin ijo ga sihh🤑🤑 Karena itu, RnCD KSEP bakal ngadain ✨ 𝐌𝐚𝐫𝐤𝐞𝐭 𝐑𝐞𝐯𝐢𝐞𝐰✨ yang mau ikut bisa cek details di bawah ini yaa‼️ 🗓️ : Kamis, 26 September 2024 ⏱️ : 18.45 - 21.00 WIB 📍 : bit.ly/SekreOnline2425 Save the date and langsung aja join Market Review by RnCD yaa biar kita bisa saling share ilmu disana via link RSVP ini, https://bit.ly/MarketReviewNomor1 https://bit.ly/MarketReviewNomor1 https://bit.ly/MarketReviewNomor1🥰🥰 see u there massa KSEP‼️ @All"
  }
]

const page = () => {
  return (
    <div className='w-full h-full overflow-clip'>
      <div className='relative flex bg-gradient-to-r from-[#A958A7] to-[#3E205A] items-center justify-center h-[200px] md:h-[275px]'>
        <Image 
        src={Dice}
        width={368}
        alt='dice'
        className='absolute -left-[250px] md:-left-[130px] top-[0px] md:top-[60px] w-100 z-10 '
        />
        <h1 className='relative font-sans font-extrabold text-3xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#ED3633] to-[#EF7219] border-white white-stroke-text text-center'>ANNOUNCEMENT</h1>
        <Image
        src={Sparkle}
        width = {350}
        alt = 'sparkle'
        className='absolute -top-[170px] -right-[140px] md:-right-[100px] md:-top-[100px]'
        />
      </div>
      <div className='bg-[#4E2865] px-20 py-20 z-20'>
        {Data.map((item) => {
          return (
            <AnnouncementCard
            key={item.title}
            title={item.title}
            content={item.content}
            />
          )
        })}
      </div>
    </div>
  )
}

export default page
