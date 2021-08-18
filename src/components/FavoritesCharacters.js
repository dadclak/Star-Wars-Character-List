import React from 'react';
import { Card, Col, Row, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { isFavorite } from '../utils/helpFunctions';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/mapToProps';

function FavoritesCharacters({favorites, addFavorite, removeFavorite, searchCharacter}) {
  const addToFav = (id, name) => {
    addFavorite(id, name)
  }

  const removeFromFav = (id, name) => {
    removeFavorite(id, name)
  }

  return (
    <div>
        {favorites.length
            ? (favorites
              .filter(char => char.name.includes(searchCharacter))
              .map((character, idx) => {
                const id = character.id
                const name = character.name
                return (
                <Card key={idx} className="mt-2">
                    <Card.Body>
                        <Row>
                        <Col xs={11}>
                            <LinkContainer to={`/character/${id}`}>
                            <Button variant="light" size="lg">
                                {name}
                            </Button>
                            </LinkContainer>
                        </Col>
                        <Col xs={1}>
                            {isFavorite(favorites, id)
                            ? <Button variant="light" onClick={() => removeFromFav(id, name)}>
                                <i className="bi bi-star-fill"></i>
                                </Button>
                            : <Button variant="light" onClick={() => addToFav(id, name)}>
                                <i className="bi bi-star"></i>
                                </Button>
                            }
                        </Col>
                        </Row>
                    </Card.Body>
                </Card>
              )}))
            : <h3>Not favorites!</h3>
        }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesCharacters);