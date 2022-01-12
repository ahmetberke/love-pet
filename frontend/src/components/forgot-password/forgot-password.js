import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Alert, Container, Row} from 'react-bootstrap';
import Loading from '../loading/loading';
import authService from '../../services/auth-service';

function ForgetPassword(props) {
  const [usernameOrMail, setUsernameOrMail] = useState('');

  const [forgotPasswordMsg, setForgotPasswordMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    const target = event.target;
    const value = target.value;

    setUsernameOrMail(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const forgotPasswordRequest = {
      usernameOrMail: usernameOrMail,
    };

    setLoading(true);
    authService.forgetPassword(forgotPasswordRequest).then((data) => {
      setLoading(false);
      setForgotPasswordMsg(data.msg);
    }).catch((error) => {
      setLoading(false);
      setForgotPasswordMsg(error.response.data.msg);
    });
  };

  return (
    <Container className="vh-100 d-flex justify-content-center">
      <Row className="align-items-center" style={{position: 'relative'}}>
        <Card>
          <Card.Title>Forgot Password</Card.Title>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Row>
                <Form.FloatingLabel className="mb-3"
                  controlId="forgotPasswordUsernameOrMail"
                  label="Username or Mail">
                  <Form.Control type="text" name="mail"
                    value={usernameOrMail}
                    onChange={onChange}/>
                </Form.FloatingLabel>
              </Row>

              <Row>
                <Loading loading={loading}>
                  <Button variant="primary" type="submit">
                    Send Mail
                  </Button>
                </Loading>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>

      <Alert variant="info" show={forgotPasswordMsg !== ''}
        onClose={() => setForgotPasswordMsg('')} dismissible
        style={{position: 'absolute', top: '0px'}}>
        <p>
          {forgotPasswordMsg}
        </p>
      </Alert>
    </Container>
  );
}

export default ForgetPassword;
