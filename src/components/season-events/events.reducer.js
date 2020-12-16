import { handleActions } from 'redux-actions';
import { fetchEventsSuccessAction } from './events.actions';

const handleFetchEventsSuccess = (state, { events }) => {
  return { ...state, ...events };
};

const eventsReducer = handleActions(
  {
    [fetchEventsSuccessAction.toString()]: handleFetchEventsSuccess,
  },
  {}
);

export default eventsReducer;
