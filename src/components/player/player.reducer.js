import { handleActions } from 'redux-actions';
import {
  fetchAllPlayersSuccessAction,
  fetchPlayerDetailsSuccessAction,
} from './player.actions';

const handleFetchAllPlayerSuccess = (state, { players }) => {
  return {
    ...state,
    allPlayers: players?.player,
  };
};

const handlePlayerDetails = (state, { payload }) => {
  return {
    ...state,
    byId: {
      ...state.byId,
      [payload.idPlayer]: { ...payload },
    },
  };
};

const playersReducer = handleActions(
  {
    [fetchAllPlayersSuccessAction.toString()]: handleFetchAllPlayerSuccess,
    [fetchPlayerDetailsSuccessAction.toString()]: handlePlayerDetails,
  },
  {}
);

export default playersReducer;
