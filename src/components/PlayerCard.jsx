import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,

} from '@mui/material';

import './PlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <Card className="card" sx={{ maxWidth: 345, borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={name}
        className="image"
        sx={{ objectFit: 'cover', borderRadius: '16px 16px 0 0' }}
      />
      <CardContent sx={{ padding: '16px' }}>
        <Typography gutterBottom variant="h5" component="div" className="name">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" className="position">
          {position}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="stats">
          Points per Game: {stats.pointsPerGame}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="stats">
          Assists per Game: {stats.assistsPerGame}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="stats">
          Rebounds per Game: {stats.reboundsPerGame}
        </Typography>
      </CardContent>
      
    </Card>
  );
};

export default BasketballPlayerCard;
