import React from 'react';
import Container from 'react-bootstrap/Container';
import {ButtonGroup, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import HomeImage from '../../assets/animal.png';

function Home(props) {
  return (
    <Container fluid
      className="d-flex flex-column vh-100 align-items-center
        justify-content-center gap-5"
      style={{
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: '100% 100%',
      }}>
      <Row>
        <h2>
          Love Pet connects high quality pet clinics with pet owners. Sign up
          if you have not registered yet.
        </h2>
      </Row>
      <Row>
        <ButtonGroup size="lg" aria-label="button-user-type">
          <Button as={Link} to="/signup/clinic"
            variant="secondary">Clinic</Button>
          <Button as={Link} to="/signup/owner" variant="secondary">
            Pet owner
          </Button>
        </ButtonGroup>
      </Row>
    </Container>
  );
}

export default Home;
