import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { IS_PRODUCTION } from '../constants';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const appliedMiddleware = IS_PRODUCTION
  ? applyMiddleware(sagaMiddleware)
  : composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, appliedMiddleware);

sagaMiddleware.run(sagas);

window.store = store;

export default store;
