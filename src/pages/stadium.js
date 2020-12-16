import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

import { getTeamData } from '../app.selectors';

const diplayName = 'StadiumPage';

const StadiumPage = () => {
  const teamData = useSelector((state) => getTeamData(state));

  return (
    <Container fluid className="main-body no-padding">
      <div className="stadium-image-wrapper">
        <Image src={teamData.strStadiumThumb} fluid />
        <div className="stadium-title">
          <h2>{teamData.strStadium}</h2>
        </div>
        <div className="stadium-capacity">
          <h3>Capacity - {teamData.intStadiumCapacity}</h3>
        </div>
      </div>
      <Jumbotron>
        <p>{teamData.strStadiumDescription}</p>
      </Jumbotron>
    </Container>
  );
};

StadiumPage.displayName = diplayName;

export default StadiumPage;
