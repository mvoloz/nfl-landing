import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import UpcomingEventItem from './upcoming-event-item';

const displayName = 'UpcomingEvents';

const UpcomingEvents = ({ events }) => {
  return (
    <Container>
      <Card>
        <Card.Header>Upcoming Games</Card.Header>
        <ListGroup variant="flush">
          {events.map((event) => (
            <UpcomingEventItem event={event} key={event.idEvent} />
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
};

UpcomingEvents.displayName = displayName;

export default UpcomingEvents;
