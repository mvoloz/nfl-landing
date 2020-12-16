import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { stringOrNa } from '../../../utils/string-utils';

const displayName = 'AttributeRow';

const AttributeRow = ({ name, value }) => (
  <Row noGutters>
    <Col xs={6}>
      <Row noGutters>{name}</Row>
    </Col>
    <Col xs={6}>
      <Row noGutters>{stringOrNa(value)}</Row>
    </Col>
  </Row>
);

AttributeRow.displayName = displayName;

export default AttributeRow;
