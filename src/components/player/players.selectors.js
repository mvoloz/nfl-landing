import createCachedSelector from 're-reselect';
import { createSelector } from 'reselect';
import { getIdFromProps, playerByIdCacheKey } from '../../utils/key-utils';

const getPlayers = (state) => state.players;

const getAllPlayers = createSelector(
  getPlayers,
  (players) => players.allPlayers
);

const getPlayersById = createSelector(
  getPlayers,
  (players) => players.byId || []
);

const getPlayerDetailsById = createCachedSelector(
  getPlayersById,
  getIdFromProps,
  (players, id) => players?.[id]
)(playerByIdCacheKey);

export { getAllPlayers, getPlayerDetailsById };
