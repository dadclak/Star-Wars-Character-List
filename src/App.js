import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CharacterDescription from './components/CharacterDescription';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Container className="mt-4 mb-5 background">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/favorites'} exact component={Favorites} />
          <Route path={'/character/:id'} exact component={CharacterDescription} />
          <Route path={'*'} component={NotFoundPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
