import React from 'react';
import { useSelector } from 'react-redux';
import PastEvents from './past-events';

import { getPastEvents } from '../events.selectors';

const displayName = 'PastEventsContainer';

const PastEventsContainer = () => {
  const pastEvents = useSelector((state) => getPastEvents(state));
  return <PastEvents events={pastEvents} />;
};

PastEventsContainer.displayName = displayName;

export default PastEventsContainer;
