import { createCachedSelector } from 're-reselect';
import { eventsLenghtCacheKey } from '../../utils/key-utils';

import { TEAM_NAME } from '../../constants';

const getSeasonEvents = (state) => state.events;

const getTeamEvents = createCachedSelector(getSeasonEvents, (events) => {
  return events?.events.filter((event) => event.strEvent.includes(TEAM_NAME));
})(eventsLenghtCacheKey);

const getPastEvents = createCachedSelector(getTeamEvents, (events) => {
  return events.filter((event) => new Date(event.dateEvent) < new Date());
})((state) => {
  return `pastEvents-${state.events.events.length}`;
});

const getUpcomingEvents = createCachedSelector(getTeamEvents, (events) => {
  return events.filter((event) => new Date(event.dateEvent) > new Date());
})((state, props) => {
  return `upcomingEvents-${state.events.events.length}`;
});

const getLastEvent = createCachedSelector(getPastEvents, (events) => {
  return events[events.length];
})((state) => `lastEvent-${state.events.events.length}`);

export { getLastEvent, getPastEvents, getTeamEvents, getUpcomingEvents };
