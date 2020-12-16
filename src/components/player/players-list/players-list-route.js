import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PlayerList from './players-list-container';

const displayName = 'PlayerListRoute';

const PlayerListRoute = () => {
  return (
    <Container xs={12} md={12} lg={4}>
      <Col xs={12} md={12}>
        <Row>
          <h3>Roster</h3>
          <PlayerList />
        </Row>
      </Col>
    </Container>
  );
};

PlayerListRoute.displayName = displayName;

export default PlayerListRoute;
