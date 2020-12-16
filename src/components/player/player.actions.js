import { createAction } from 'redux-actions';

const ACTIONS = {
  fetchAllPlayersSuccess: 'FETCH_PLAYERS_SUCCESS',
  fetchPlayerDetails: 'FETCH_PLAYER_DETAILS',
  fetchPlayerDetailsSuccess: 'FETCH_PLAYER_DETAILS_SUCCESS',
  fetchPlayerDetailsFail: 'FETCH_PLAYER_DETAILS_FAIL',
  searchPlayerStart: 'SEARCH_PLAYER_START',
};

export const fetchAllPlayersSuccessAction = createAction(
  ACTIONS.fetchAllPlayersSuccess
);
export const fetchPlayerDetailsAction = createAction(
  ACTIONS.fetchPlayerDetails
);

export const fetchPlayerDetailsSuccessAction = createAction(
  ACTIONS.fetchPlayerDetailsSuccess
);

export const fetchPlayerDetailsFailAction = createAction(
  ACTIONS.fetchPlayerDetailsFail
);

export const searchPlayerStartAction = createAction(ACTIONS.searchPlayerStart);
