import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const displayName = 'PlayerDetails';

const PlayerProfileCard = ({ image, name, position }) => {
  return (
    <Col xs={12} sm={12} md={3}>
      <Row noGutters className="justify-content-center">
        <Image src={image} roundedCircle width={200} />
      </Row>
      <Col xs={12}>
        <Row noGutters className="justify-content-center">
          {name}
        </Row>
        <Row noGutters className="justify-content-center">
          {position}
        </Row>
      </Col>
    </Col>
  );
};

PlayerProfileCard.displayName = displayName;

export default PlayerProfileCard;
