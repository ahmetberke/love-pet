import React from 'react';
import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap';

function LogoutModal(props) {
  const onApprove = () => props.onModalClose(true);
  const onDismiss = () => props.onModalClose(false);

  return (
    <Modal show={props.show} onHide={onDismiss} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to logout?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onApprove}>
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LogoutModal;
