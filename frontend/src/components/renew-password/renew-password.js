/* eslint linebreak-style: ["error", "windows"]*/
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Alert, Container, Row} from 'react-bootstrap';
import Loading from '../loading/loading';
import authService from '../../services/auth-service';
import {useSearchParams} from 'react-router-dom';
import OverlayTriggerWrapper
  from '../../overlay-trigger/overlay-trigger-wrapper';

function RenewPassword(props) {
  /* eslint-disable */
  const [searchParams, setSearchParams] = useSearchParams();
  /* eslint-enable */

  const [renewPasswordCredentials, setRenewPasswordCredentials] = useState({
    newPasswordConfirm: '',
    newPassword: '',
  });

  const [validation, setValidation] = useState({
    newPassword: {valid: false, msg: ''},
    newPasswordConfirm: {valid: false, msg: ''},
  });

  const [renewPasswordMsg, setRenewPasswordMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const validateNewPassword = (newPassword) => {
    let message = '';
    if (newPassword.length < 7) {
      message = 'Your password needs a minimum of seven characters.';
    }
    if (newPassword.length > 14) {
      message = 'Your password needs a maximum of fourteen characters.';
    }
    if (newPassword.search(/[a-z]/) === -1) {
      message = 'Your password needs at least one lower case letter.';
    }
    if (newPassword.search(/[A-Z]/) === -1) {
      message = 'Your password needs at least one upper case letter.';
    }
    if (newPassword.search(/[0-9]/) === -1) {
      message = 'Your password needs a number.';
    }
    if (newPassword.search(/^[a-zA-Z0-9_]{7,14}$/) === -1) {
      message = 'Your password should only consist alphanumeric ' +
          'characters of length between 7 and 14!';
    }

    setValidation((prevState) => ({
      ...prevState,
      newPassword: {valid: message === '', msg: message},
    }));
  };

  const validateNewPasswordConfirm = (newPasswordConfirm) => {
    let message = '';
    if (newPasswordConfirm !== renewPasswordCredentials.newPassword) {
      message = 'Password not match';
    }

    setValidation((prevState) => ({
      ...prevState,
      newPasswordConfirm: {valid: message === '', msg: message},
    }));
  };

  const validate = () => {
    validateNewPassword(renewPasswordCredentials.newPassword);
    validateNewPasswordConfirm(renewPasswordCredentials.newPasswordConfirm);
  };

  const onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setRenewPasswordCredentials((prevState) => ({...prevState, [name]: value}));
    switch (name) {
      case 'newPassword':
        validateNewPassword(value);
        break;
      case 'newPasswordConfirm':
        validateNewPasswordConfirm(value);
        break;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    validate();
    if (checkValidity()) {
      const userId = searchParams.get('id');
      const uuid = searchParams.get('uuid');

      if (userId !== null && uuid !== null) {
        const renewPasswordRequest = {
          userid: Number(userId),
          uuid: uuid,
          password: renewPasswordCredentials.newPassword,
        };

        setLoading(true);
        authService.renewPassword(renewPasswordRequest).then((data) => {
          setLoading(false);
          setRenewPasswordMsg(data.msg);
        }).catch((error) => {
          setLoading(false);
          setRenewPasswordMsg(error.response.data.msg);
        });
      } else {
        setRenewPasswordMsg('Wrong link!');
      }
    }
  };

  const checkValidity = () => {
    for (const validationItem in validation) {
      if (!validation[validationItem].valid) {
        return false;
      }
    }

    return true;
  };

  return (
    <Container className="vh-100 d-flex justify-content-center">
      <Row className="align-items-center" style={{position: 'relative'}}>
        <Card>
          <Card.Title>Renew Password</Card.Title>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Row>
                <Form.FloatingLabel className="mb-3"
                  controlId="renewPasswordNewPassword"
                  style={{position: 'relative'}} label="Password">
                  <OverlayTriggerWrapper msg={validation.newPassword.msg}>
                    <Form.Control type="password" name="newPassword"
                      value={renewPasswordCredentials.newPassword}
                      onChange={onChange}
                      isInvalid={validation.newPassword.msg !== ''}/>
                  </OverlayTriggerWrapper>
                </Form.FloatingLabel>
              </Row>

              <Row>
                <Form.FloatingLabel className="mb-3"
                  controlId="renewPasswordNewPasswordConfirm"
                  style={{position: 'relative'}} label="Confirm Password">
                  <OverlayTriggerWrapper
                    msg={validation.newPasswordConfirm.msg}>
                    <Form.Control type="password" name="newPasswordConfirm"
                      value={renewPasswordCredentials.newPasswordConfirm}
                      onChange={onChange}
                      isInvalid={validation.newPasswordConfirm.msg !== ''}/>
                  </OverlayTriggerWrapper>
                </Form.FloatingLabel>
              </Row>

              <Row>
                <Loading loading={loading}>
                  <Button variant="primary" type="submit">
                    Renew Password
                  </Button>
                </Loading>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>

      <Alert variant="info" show={renewPasswordMsg !== ''}
        onClose={() => setRenewPasswordMsg('')} dismissible
        style={{position: 'absolute', top: '0px'}}>
        <p>
          {renewPasswordMsg}
        </p>
      </Alert>
    </Container>
  );
}

export default RenewPassword;
