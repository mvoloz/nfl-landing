import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { TEAM_NAME } from '../../../constants';

const displayName = 'PastEventItem';

const PastEventItem = ({ event }) => {
  const isHomeTeam = event.strHomeTeam === TEAM_NAME;
  const oponent = isHomeTeam ? event.strAwayTeam : event.strHomeTeam;
  const homeScore = isHomeTeam ? event.intHomeScore : event.intAwayScore;
  const awayScore = isHomeTeam ? event.intAwayScore : event.intHomeScore;

  return (
    <ListGroupItem className="tiny-font d-inline-flex justify-content-between">
      <div className="oponent">@ {oponent}</div>
      <div className="schedule">
        <span>{awayScore}</span>
        <span> - </span>
        <span>{homeScore}</span>
      </div>
    </ListGroupItem>
  );
};

PastEventItem.displayName = displayName;

export default PastEventItem;
