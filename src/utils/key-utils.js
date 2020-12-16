import { CACHE_KEY_SEPARATOR } from '../constants';

export const eventsLenghtCacheKey = (state) => {
  const {
    events: { events },
    teamData,
  } = state;
  return `${events.length}${CACHE_KEY_SEPARATOR}${teamData.id}`;
};

export const getPathFromProps = (_state, props) => props.path;

export const getIdFromProps = (_state, props) => props.id;
export const playerByIdCacheKey = (_state, props) =>
  `playerById${CACHE_KEY_SEPARATOR}${props.id}`;
