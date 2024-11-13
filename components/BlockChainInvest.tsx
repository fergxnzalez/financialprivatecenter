'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material'
import blockChainInvest from '@/interfaces/blockChainInvest'
import Link from 'next/link'

interface blockChainInvestProps {
  props: blockChainInvest;
}

const CasinoGame: React.FC<blockChainInvestProps> = ({ props }: blockChainInvestProps) => {
  return (
    <Link href={`/blockchain/${props.href}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={`/${props.image}`}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.name}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Link>

  )
}

export default CasinoGame