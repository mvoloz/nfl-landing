import { createAction } from 'redux-actions';

const ACTIONS = {
  fetchAllPlayersSuccess: 'FETCH_PLAYERS_SUCCESS',
  fetchPlayerDetails: 'FETCH_PLAYER_DETAILS',
  fetchPlayerDetailsSuccess: 'FETCH_PLAYER_DETAILS_SUCCESS',
  fetchPlayerDetailsFail: 'FETCH_PLAYER_DETAILS_FAIL',
  fetchPlayerContractSuccess: 'FETCH_PLAYER_CONTRACT_SUCCESS',
  fetchPlayerContractFail: 'FETCH_PLAYER_CONTRACT_FAIL',
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

export const fetchPlayerContractSuccessAction = createAction(
  ACTIONS.fetchPlayerContractSuccess
);

export const fetchPlayerContractFailAction = createAction(
  ACTIONS.fetchPlayerContractFail
);

export const searchPlayerStartAction = createAction(ACTIONS.searchPlayerStart);
