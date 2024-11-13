import React from 'react'
import blockChainInvest from '@/interfaces/blockChainInvest'
import BlockChainInvest from '@/components/BlockChainInvest'
import { Container, Grid } from '@mui/material'

const blockChainInvests: blockChainInvest[] = [
  {
    name: "NFT",
    image: "nft.jpg",
    description: "NFT investments are a type of cryptocurrency that are stored on a blockchain.",
    href: "nft"
  },
  {
    name: "Up-coming Coins",
    image: "comingsoon.jpg",
    description: "New cryptocurrencies are being added to the blockchain every day.",
    href: "upcoming"
  }
]

export default function Page() {
  return (
    <Container className="py-6">
      <div className="container">
        <h1 className="text-3xl font-bold">Blockchain</h1>
      </div>
      <div className="container py-6">
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          {blockChainInvests.map((invest, index) => (
            <Grid sx={{ p: 1 }} key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <BlockChainInvest key={index} props={invest}></BlockChainInvest>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
}
