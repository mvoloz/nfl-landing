import React from 'react';
import { Link } from '@reach/router';
import { Card } from 'react-bootstrap';
const displayName = 'PlayerCard';

const PlayerCard = ({ player }) => {
  const { idPlayer, strThumb, strPlayer } = player;

  return (
    <Card style={{ width: '16rem' }}>
      <Link to={`/players/${idPlayer}`}>
        <Card.Img variant="top" src={`${strThumb}/preview`} width={100} />
        <Card.Body>
          <Card.Title>{strPlayer}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

PlayerCard.displayName = displayName;

export default PlayerCard;
