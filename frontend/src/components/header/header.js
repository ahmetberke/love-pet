/* eslint linebreak-style: ["error", "windows"]*/
import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from '../../contexts/auth-context';
import LogoutModal from '../logout-modal/logout-modal';

function Header(props) {
  const navigate = useNavigate();

  const authContext = useAuth();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const onLogout = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setShowLogoutModal(true);
  };

  const onModalClose = (answer) => {
    setShowLogoutModal(false);

    if (answer) {
      authContext.logout();
      navigate('/login');
    }
  };

  return (
    <Navbar bg="dark" variant="dark"
      style={{position: 'relative'}}>
      <Navbar.Brand as={Link} to="/home">Love Pet</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        {
          (authContext.isAuthenticated === false) ?
            <Nav.Link as={Link} to="/login">Login</Nav.Link> :
            <Nav.Link as={Link} onClick={onLogout} to="/login">Logout</Nav.Link>
        }
      </Nav>
      <LogoutModal
        show={showLogoutModal}
        onModalClose={onModalClose}/>
    </Navbar>
  );
}

export default Header;
