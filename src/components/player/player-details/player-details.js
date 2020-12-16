import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import PlayerAttributes from './player-attributes';
import { PlayerFormerTeams } from '../player-former-teams';
import PlayerProfileCard from './player-profile-card';

const displayName = 'PlayerDetails';

const PlayerDetails = (props) => {
  const {
    dateBorn,
    formerTeams,
    isLoading,
    strCollege,
    strHeight,
    strPlayer,
    strPosition,
    strThumb,
    strWeight,
  } = props;

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    <Container fluid className="no-padding">
      <Jumbotron>
        <Row noGutters>
          <PlayerProfileCard
            image={strThumb}
            name={strPlayer}
            position={strPosition}
          />
          <PlayerAttributes
            height={strHeight}
            weight={strWeight}
            dob={dateBorn}
            college={strCollege}
          />
        </Row>
      </Jumbotron>
      <Container fluid>
        <Row noGutters className="mt-5">
          <h3>Previous Teams</h3>
          <PlayerFormerTeams formerTeams={formerTeams || []} />
        </Row>
      </Container>
    </Container>
  );
};

PlayerDetails.displayName = displayName;

export default PlayerDetails;
