import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Alert, Container, Row} from 'react-bootstrap';
import authService from '../../services/auth-service';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../contexts/auth-context';
import Loading from '../loading/loading';

function Login(props) {
  const navigate = useNavigate();

  const authContext = useAuth();

  const [loginCredentials, setLoginCredentials] = useState(
      {username: '', password: '', rememberMe: false});

  const [loginErr, setLoginErr] = useState('');

  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setLoginCredentials((prevState) => ({...prevState, [name]: value}));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const loginRequest = {
      username: loginCredentials.username,
      password: loginCredentials.password,
      rememberme: loginCredentials.rememberMe,
    };

    setLoading(true);
    authService.login(loginRequest).then((data) => {
      authContext.login(data.token);
      setLoading(false);
      navigate('/home', {replace: true});
    }).catch((error) => {
      setLoading(false);
      setLoginErr(error.response.data.msg);
    });
  };

  return (
    <Container className="vh-100 d-flex justify-content-center">
      <Row className="align-items-center" style={{position: 'relative'}}>
        <Card>
          <Card.Title>Login</Card.Title>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Row>
                <Form.FloatingLabel className="mb-3" controlId="signinUsername"
                  label="Username">
                  <Form.Control type="text" name="username"
                    value={loginCredentials.username}
                    onChange={onChange}/>
                </Form.FloatingLabel>
              </Row>

              <Row>
                <Form.FloatingLabel className="mb-3" controlId="signinPassword"
                  label="Password">
                  <Form.Control type="password" name="password"
                    value={loginCredentials.password}
                    onChange={onChange}/>
                </Form.FloatingLabel>
              </Row>

              <Row>
                <Form.Group className="mb-3" controlId="loginRememberMe">
                  <Form.Check type="checkbox" name="rememberMe"
                    label="Remember me"
                    checked={loginCredentials.rememberMe}
                    onChange={onChange}/>
                </Form.Group>
              </Row>

              <Row>
                <Loading loading={loading}>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Loading>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>

      <Alert variant="danger" show={loginErr !== ''}
        onClose={() => setLoginErr('')} dismissible
        style={{position: 'absolute', top: '0px'}}>
        <Alert.Heading>Login Error!</Alert.Heading>
        <p>
          {loginErr}
        </p>
      </Alert>
    </Container>
  );
}

export default Login;
