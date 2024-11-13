import React from 'react'
import UpcomingCoinsList from '@/components/UpcomingCoinsList'

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        <UpcomingCoinsList/>
      </div>
    </section>
  )
}