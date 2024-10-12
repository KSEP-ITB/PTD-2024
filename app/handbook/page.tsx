'use client'

import SearchBar from '@/components/HBSearchBar'
import Card from '@/components/HBCard'
import Jumbotron from '@/components/HBJumbotron'
import React from 'react'

const Handbook = () => {
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