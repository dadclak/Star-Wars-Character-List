import React, {useState, useEffect }  from 'react';
import { Card, Col, Row, Button, Pagination } from 'react-bootstrap';
import axios from 'axios';
import Loader from './Loader';
import {LinkContainer} from 'react-router-bootstrap'
import { isFavorite, getId } from '../utils/helpFunctions';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/mapToProps';

function Characters({favorites, addFavorite, removeFavorite, searchCharacter}) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    let cleanupFunction = false;
    setLoading(true)

    async function getCharacters(page=1) {
      try {
        const responce = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
        const data = await responce.data

        if(!cleanupFunction) {
          setPagination(() => {
            let arr = []
            for (let i=1; i<=Math.ceil(data.count / 10); i++) {
              arr.push(i)
            }
            return arr
          })

          setCharacters(data.results)
        }
      } catch (e) {
        if(e.response && e.response.status === 404) {
          console.log(e);
        }
      } finally {
        setLoading(false)
      }
    }

    getCharacters(page)
    return () => cleanupFunction = true;
  }, [page])

  const addToFav = (id, name) => {
    addFavorite(id, name)
  }

  const removeFromFav = (id, name) => {
    removeFavorite(id, name)
  }

  return (
    <div>
      {loading && <Loader/>}
      {
        characters.length ? (
          characters
            .filter(char => char.name.includes(searchCharacter))
            .map((character, idx) => {
            const id = getId(character.url)
            return (
              <Card key={idx} className="mt-2">
                <Card.Body>
                  <Row>
                    <Col xs={11}>
                      <LinkContainer to={`/character/${id}`}>
                        <Button variant="light" size="lg">
                          {character.name}
                        </Button>
                      </LinkContainer>
                    </Col>
                    <Col xs={1}>
                      {isFavorite(favorites, id)
                        ? <Button variant="light" onClick={() => removeFromFav(id, character.name)}>
                            <i className="bi bi-star-fill"></i>
                          </Button>
                        : <Button variant="light" onClick={() => addToFav(id, character.name)}>
                            <i className="bi bi-star"></i>
                          </Button>
                      }
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )
          })
        ) : loading ? null : (
          <h3>No charakters</h3>
        )
      }
      <div>
        {pagination
            ? (
                <Pagination className="mt-2">
                  {pagination.map(p => (
                    <Pagination.Item key={p} active={p === page} onClick={()=> setPage(p)}>{p}</Pagination.Item>
                  ))}
                </Pagination>
            ) : ''
        }
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);