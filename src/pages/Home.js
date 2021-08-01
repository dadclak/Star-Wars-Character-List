import React from 'react';
import { Container, Badge, Row, Col } from 'react-bootstrap';
import Characters from '../components/Characters';
import SearchCharacters from '../components/SearchCharacters';

function Home() {
  return (
    <Container>
      <Row>
        <Col><h2><Badge bg="secondary">All characters</Badge></h2></Col>
        <Col><SearchCharacters/></Col>
      </Row>
      <Characters />
    </Container>
  );
}

export default Home;