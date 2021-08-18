import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Badge, Card, Button, Row, Col } from 'react-bootstrap';
import { capitalizeFirstLetter, isFavorite } from '../utils/helpFunctions';
import Loader from './Loader';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../redux/mapToProps';

function CharacterDescription({favorites, addFavorite, removeFavorite}) {
    let { id } = useParams()
    const [character, setCharacter] = useState({})
    const [loading, setLoading] = useState(true)
    const description = [
      'birth_year',
      'created',
      'gender',
      'height',
      'mass',
      'skin_color',
      'eye_color'
    ]

    useEffect(() => {
      let cleanupFunction = false;
      async function getCharacter() {
        try {
          const responce = await axios.get(`https://swapi.dev/api/people/${id}`)
          const data = await responce.data
          if(!cleanupFunction) setCharacter(data)
        } catch (e) {
          console.log(e.message);
        } finally {
          setLoading(false)
        }
      }

      getCharacter()
      return () => cleanupFunction = true;
    },[id])

    const addToFav = (id, name) => {
      addFavorite(id, name)
    }

    const removeFromFav = (id, name) => {
      removeFavorite(id, name)
    }

    return (
      <div>
          <h2>
              <Badge bg="dark">Description</Badge>
          </h2>
          {loading && <Loader/>}
          {
            Object.keys(character).length !== 0 ? (
              <Card className="mt-2 p-3">
                <Card.Title>
                  <h3>{character.name}</h3>
                  {isFavorite(favorites, id)
                    ? <Button variant="light" onClick={() => removeFromFav(id, character.name)}>
                        <i className="bi bi-star-fill"></i>
                      </Button>
                    : <Button variant="light" onClick={() => addToFav(id, character.name)}>
                        <i className="bi bi-star"></i>
                      </Button>
                  }
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <h5>{character.created}</h5>
                </Card.Subtitle>
                {description.map((des, idx)=> (
                  <Card key={idx}>
                    <Card.Body>
                      <Row>
                        <Col xs={3}>
                          {capitalizeFirstLetter(des).split('_').join(' ')}
                        </Col>
                        <Col xs={9}>
                          {character[des]}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </Card>
            ) : loading ? null : (
              <h3>Description</h3>
            )
          }
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDescription);