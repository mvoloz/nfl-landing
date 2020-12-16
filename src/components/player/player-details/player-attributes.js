import React from 'react';
import Col from 'react-bootstrap/Col';
import { formatDate } from '../../../utils/date-utils';
import AttributeRow from './attribute-row';

const displayName = 'PlayerAttributes';

const PlayerAttributes = ({ height, weight, dob, college }) => (
  <Col xs={12} sm={6} md={4}>
    <AttributeRow name="Height" value={height} />
    <AttributeRow name="Weight" value={weight} />
    <AttributeRow name="DOB" value={formatDate(dob)} />
    <AttributeRow name="College" value={college} />
  </Col>
);

PlayerAttributes.displayName = displayName;

export default PlayerAttributes;
