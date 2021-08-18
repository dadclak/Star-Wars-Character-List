import React, { useState } from 'react';
import {InputGroup, FormControl, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../redux/mapToProps';

function SearchCharacters({setSearchCharacter}) {
    const [valueCharacter, setValueCharacter] = useState('')

    const getSearch = (name = valueCharacter) => {
        setValueCharacter(name)
        setSearchCharacter(name.toUpperCase())
    }

    return (
        <Col md={{ span: 7, offset: 5 }}>
            <InputGroup className="mb-2">
                <Button variant="light" onClick={() => getSearch()}>
                    <i className="bi bi-search"></i>
                </Button>
                <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Enter name character"
                    value={valueCharacter}
                    onChange={(e) => getSearch(e.target.value)}/>
            </InputGroup>
        </Col>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCharacters);