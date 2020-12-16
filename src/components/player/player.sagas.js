import { all, call, delay, put, select, takeEvery } from 'redux-saga/effects';
import Fuse from 'fuse.js';

import Api from '../../services/api';
import {
  fetchPlayerDetailsAction,
  fetchPlayerDetailsSuccessAction,
  searchPlayerStartAction,
} from './player.actions';

import {
  pageLoadStartAction,
  pageLoadCompleteAction,
  forceRouteChangeAction,
} from '../../app.actions';
import { getAllPlayers } from './players.selectors';

function* fetchPlayerDetails(id) {
  const [playerDetails, playerFormerTeams] = yield all([
    call([Api, Api.getPlayerDetails], id),
    call([Api, Api.getPlayerFormerTeams], id),
  ]);

  const details = {
    ...(playerDetails.players[0] || {}),
    formerTeams: playerFormerTeams.formerteams,
  };

  yield put({
    type: fetchPlayerDetailsSuccessAction.toString(),
    payload: details,
  });
}

function* fetchPlayerContract(id) {
  const playerContract = yield call([Api, Api.getPlayerContracts], id);
  console.log({ playerContract });
}

function* fetchAllPlayerDetails({ payload }) {
  const { id, path } = payload;

  yield put({
    type: pageLoadStartAction.toString(),
    payload: path,
  });

  // yield all([fetchPlayerDetails(id), fetchPlayerContract(id)]);
  yield call(fetchPlayerDetails, id);

  yield put({ type: pageLoadCompleteAction.toString() });
}

function* handlePlayerSearch({ payload: { value } }) {
  const players = yield select(getAllPlayers);
  const options = {
    keys: ['strPlayer', 'strPosition', 'strDescription'],
  };
  const fuse = new Fuse(players, options);
  const result = fuse.search(value);

  if (result.length) {
    const player = result[0].item;

    yield put({
      type: forceRouteChangeAction.toString(),
      payload: { id: `/players/${player.idPlayer}`, start: true },
    });

    yield delay(50);

    /**
     * this is ugly, reach router on its own doesn't appear to work in sagas,
     * I did not want to spend the time on configuring a different router,
     * we're just waiting 50ms to wipe out the value in the store.
     * Its enough time to do the route transition.
     */

    yield put({
      type: forceRouteChangeAction.toString(),
      payload: { id: null, start: false },
    });
  }

  yield;
}

export default function* playerSaga() {
  yield takeEvery(fetchPlayerDetailsAction.toString(), fetchAllPlayerDetails);
  yield takeEvery(searchPlayerStartAction.toString(), handlePlayerSearch);
}
