import React from 'react'
import CasinoGame from '@/components/CasinoGame'
import casinoGame from '@/interfaces/casinoGame'
import { Container, Grid } from '@mui/material'

const casinoGames: casinoGame[] = [
  {
    name: "BlackJack",
    image: "blackjack.jpg",
    description: "A popular casino card game where the goal is to beat the dealer.",
  },
  {
    name: "Roulette",
    image: "roulette.jpg",
    description: "A popular casino random game where the goal is to win the bet.",
  },
]

export default function Page() {
  return (
    <Container className="py-6">
      <div className="container">
        <h1 className="text-3xl font-bold">Casino</h1>
      </div>
      <div className="container py-6">
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          {casinoGames.map((game, index) => (
            <Grid sx={{ p: 1 }} key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <CasinoGame key={index} props={game}></CasinoGame>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
}