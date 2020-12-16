import React from 'react';
import { useSelector } from 'react-redux';
import UpcomingEvents from './upcoming-events';

import { getUpcomingEvents } from '../events.selectors';

const displayName = 'UpcomingEventsContainer';

const UpcomingEventsContainer = (props) => {
  const upcomingEvents = useSelector((state) => getUpcomingEvents(state));
  return <UpcomingEvents events={upcomingEvents} />;
};

UpcomingEventsContainer.displayName = displayName;

export default UpcomingEventsContainer;
