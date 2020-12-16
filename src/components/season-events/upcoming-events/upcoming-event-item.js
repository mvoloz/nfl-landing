import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { TEAM_NAME } from '../../../constants';
import { formatDate } from '../../../utils/date-utils';

const displayName = 'UpcomingEventItem';

const UpcomingEventItem = ({ event }) => {
  const isHomeTeam = event.strHomeTeam === TEAM_NAME;
  const oponent = isHomeTeam ? event.strAwayTeam : event.strHomeTeam;

  return (
    <ListGroupItem className="tiny-font">
      <div className="oponent">@ {oponent}</div>
      <div className="schedule">
        <span>{formatDate(event.dateEventLocal)}</span>
        <span> - </span>
        <span>{event.strTimeLocal}</span>
      </div>
    </ListGroupItem>
  );
};

UpcomingEventItem.displayName = displayName;

export default UpcomingEventItem;
