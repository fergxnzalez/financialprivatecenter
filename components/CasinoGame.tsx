'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import casinoGame from '@/interfaces/casinoGame'
import { CardActionArea, CardHeader, CardMedia } from '@mui/material'

interface casinoGamesProps {
  props: casinoGame;
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const CasinoGame: React.FC<casinoGamesProps> = ({ props }: casinoGamesProps) => {
  return (
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
        <Button size='small' color='primary'>
          Explore
        </Button>
      </CardActions>
    </Card>
  )
}

export default CasinoGame