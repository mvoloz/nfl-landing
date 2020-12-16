import { combineReducers } from 'redux';
import { appUIReducer, teamDataReducer } from '../app.reducer';
import eventsReducer from '../components/season-events/events.reducer';
import playersReducer from '../components/player/player.reducer';

export default combineReducers({
  appState: appUIReducer,
  teamData: teamDataReducer,
  events: eventsReducer,
  players: playersReducer,
});
