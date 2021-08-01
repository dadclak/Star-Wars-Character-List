import React from 'react';
import { Container } from 'react-bootstrap';
import '../style/error.css';

function NotFoundPage() {
  const image = 'http://i.giphy.com/l117HrgEinjIA.gif'

  return (
    <Container>
      <div className="FourOhFour">
        <div className="bg" style={{ backgroundImage: 'url(' + image + ')'}}></div>
        <div className="code">404</div>
      </div>
    </Container>
  );
}

export default NotFoundPage;