import { all, call, fork, put } from 'redux-saga/effects';
import Api from '../services/api';

import playerSaga from '../components/player/player.sagas';

import {
  globalDataSuccessAction,
  initialLoadCompleteAction,
} from '../app.actions';

import { fetchEventsSuccessAction } from '../components/season-events/events.actions';
import { fetchAllPlayersSuccessAction } from '../components/player/player.actions';

function* fetchEvents() {
  const events = yield call([Api, Api.getSeasonEvents]);
  yield put({ type: fetchEventsSuccessAction.toString(), events });
}

function* fetchPlayers() {
  const players = yield call([Api, Api.getPlayers]);
  yield put({ type: fetchAllPlayersSuccessAction.toString(), players });
}

function* fetchTeamDetails() {
  const globalData = yield call([Api, Api.getTeamData]);
  yield put({ type: globalDataSuccessAction.toString(), globalData });
}

function* initialLoad() {
  yield all([fetchTeamDetails(), fetchPlayers(), fetchEvents()]);
  yield put({ type: initialLoadCompleteAction.toString() });
}
export default function* loadAppSaga() {
  yield all([call(initialLoad), fork(playerSaga)]);
}
