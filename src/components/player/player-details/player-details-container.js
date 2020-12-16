import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayerDetailsAction } from '../player.actions';
import { getPlayerDetailsById } from '../players.selectors';

import { getIsPageLoading } from '../../../app.selectors';
import PlayerDetails from './player-details';

const displayName = 'PlayerDetailsContainer';

const PlayerDetailsContainer = ({ id, path }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlayerDetailsAction({ id, path }));
  }, [dispatch, id, path]);

  const isLoading = useSelector((state) => getIsPageLoading(state, { path }));
  const playerDetails = useSelector((state) =>
    getPlayerDetailsById(state, { id })
  );

  return <PlayerDetails isLoading={isLoading} id={id} {...playerDetails} />;
};

PlayerDetailsContainer.displayName = displayName;

export default PlayerDetailsContainer;
