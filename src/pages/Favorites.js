import React from 'react';
import { Container, Badge, Row, Col } from 'react-bootstrap';
import FavoritesCharacters from '../components/FavoritesCharacters';
import SearchCharacter from '../components/SearchCharacters';

function Favorites() {
  return (
    <Container>
      <Row>
        <Col><h2><Badge bg="secondary">All characters</Badge></h2></Col>
        <Col><SearchCharacter/></Col>
      </Row>
      <FavoritesCharacters/>
    </Container>
  );
}

export default Favorites;