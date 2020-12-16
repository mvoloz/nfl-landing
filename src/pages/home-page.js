import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Carousel } from '../components/carousel';
import { UpcomingEvents, PastEvents } from '../components/season-events';

import { PlayerList } from '../components/player';

import { getTeamData } from '../app.selectors';

const displayName = 'HomePage';

const HomePage = () => {
  const teamData = useSelector((state) => getTeamData(state));
  return (
    <Container fluid className="main-body no-padding">
      <Carousel />
      <Jumbotron>
        <p>{teamData.strDescriptionEN}</p>
      </Jumbotron>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={9}>
            <Row>
              <PlayerList />
            </Row>
          </Col>
          <Col xs={12} md={3}>
            <UpcomingEvents />
            <PastEvents />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

HomePage.displayName = displayName;

export default HomePage;
