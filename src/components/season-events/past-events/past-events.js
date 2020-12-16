import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import PastEventItem from './past-event-item';

const displayName = 'PastEvents';

const PastEvents = ({ events }) => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>Past Events</Card.Header>
        <ListGroup variant="flush">
          {events.map((event) => (
            <PastEventItem event={event} key={event.idEvent} />
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
};

PastEvents.displayName = displayName;

export default PastEvents;
