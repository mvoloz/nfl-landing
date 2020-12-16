import { createAction } from 'redux-actions';

const ACTIONS = {
  fetchEventsSuccess: 'FETCH_EVENTS_SUCCESS',
};

export const fetchEventsSuccessAction = createAction(
  ACTIONS.fetchEventsSuccess
);
