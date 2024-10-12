'use client'

import SearchBar from '@/components/HBSearchBar'
import Card from '@/components/HBCard'
import Jumbotron from '@/components/HBJumbotron'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Handbook = () => {
  const { data } = useSession()
  const router = useRouter()

  if (!data) {
    router.push("/sign-in")
  }

  return (
    <>
      <Jumbotron/>
      <section className = "bg-[#0F389B] px-[6vw] py-[2vw]">
        <SearchBar/>
        <Card
          HBDay = "Day 1"
          HBTitle = "Personal Finance"
        />
        <Card
          HBDay = "Day 2"
          HBTitle = "Investment World"
        />
      </section>
    </>
  )
}

export default Handbook