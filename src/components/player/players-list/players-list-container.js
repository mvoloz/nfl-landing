import React from 'react';
import { useSelector } from 'react-redux';
import PlayersList from './players-list';
import { getAllPlayers } from '../players.selectors';

const displayName = 'PlayersListContainer';

const PlayersListContainer = () => {
  const players = useSelector((state) => getAllPlayers(state));

  return <PlayersList players={players} />;
};

PlayersListContainer.displayName = displayName;

export default PlayersListContainer;
