import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import { PlayerCard } from '../player-card';
import './card-columns.css';

const displayName = 'PlayersList';

const PlayersList = ({ players }) => {
  return (
    <CardColumns className="xs-centered">
      {players.map((player) => (
        <PlayerCard player={player} key={player.idPlayer} />
      ))}
    </CardColumns>
  );
};

PlayersList.displayName = displayName;

export default PlayersList;
