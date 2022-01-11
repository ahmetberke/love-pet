import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import authService from '../../services/auth-service';
import RegionGroup from '../region-group/region-group';
import {useAuth} from '../../contexts/auth-context';
import Container from 'react-bootstrap/Container';
import {Alert, Col, Row} from 'react-bootstrap';
import OverlayTriggerWrapper
  from '../../overlay-trigger/overlay-trigger-wrapper';
import Loading from '../loading/loading';

function Signup(props) {
  const navigate = useNavigate();

  const {userType} = useParams();

  const authContext = useAuth();

  const [signupCredentials, setSignupCredentials] = useState({
    userTypeId: (userType === 'clinic') ? 1 : 2,
    username: '',
    prevUsername: '',
    rePassword: '',
    password: '',
    phone: '',
    mail: '',
    address: '',
  });

  const [region, setRegion] = useState(
      {countryId: -1, cityId: -1, provinceId: -1});

  const [validation, setValidation] = useState({
    username: {valid: false, msg: ''},
    password: {valid: false, msg: ''},
    rePassword: {valid: false, msg: ''},
    phone: {valid: false, msg: ''},
    mail: {valid: false, msg: ''},
    address: {valid: false, msg: ''},
  });

  const [signupErr, setSignupErr] = useState('');

  const [addressLen, setAddressLen] = useState(0);

  const [loading, setLoading] = useState(false);

  const validateUsername = (username) => {
    let message = '';
    if (username.search(/^[a-zA-Z0-9-_]{7,14}$/) === -1) {
      message = 'Your username should only consist alphanumeric ' +
          'characters of length between 7 and 14!';
    }

    if (message !== '') {
      setValidation((prevState) => ({
        ...prevState,
        username: {valid: false, msg: message},
      }));
    } else {
      if (signupCredentials.prevUsername !== username) {
        authService.validateUsername(username).then((data) => {
          setValidation((prevState) => ({
            ...prevState,
            username: {valid: data.valid, msg: data.msg},
          }));
          setSignupCredentials(
              (prevState) =>
                ({...prevState, prevUsername: prevState.username}));
        });
      }
    }
  };

  const validatePassword = (password) => {
    let message = '';
    if (password.length < 7) {
      message = 'Your password needs a minimum of seven characters.';
    }
    if (password.length > 14) {
      message = 'Your password needs a maximum of fourteen characters.';
    }
    if (password.search(/[a-z]/) === -1) {
      message = 'Your password needs at least one lower case letter.';
    }
    if (password.search(/[A-Z]/) === -1) {
      message = 'Your password needs at least one upper case letter.';
    }
    if (password.search(/[0-9]/) === -1) {
      message = 'Your password needs a number.';
    }
    if (password.search(/^[a-zA-Z0-9_]{7,14}$/) === -1) {
      message = 'Your password should only consist alphanumeric ' +
          'characters of length between 7 and 14!';
    }

    setValidation((prevState) => ({
      ...prevState,
      password: {valid: message === '', msg: message},
    }));
  };

  const validateRePassword = (rePassword) => {
    let message = '';
    if (rePassword !== signupCredentials.password) {
      message = 'Password not match';
    }

    setValidation((prevState) => ({
      ...prevState,
      rePassword: {valid: message === '', msg: message},
    }));
  };

  const validatePhone = (phone) => {
    let message = '';
    if (phone.search(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/) ===
        -1) {
      message = 'Your phone should only consist ' +
          'numbers in format xxx xxx xxxx!';
    }

    setValidation((prevState) => ({
      ...prevState,
      phone: {valid: message === '', msg: message},
    }));
  };

  const validateMail = (mail) => {
    let message = '';

    /* eslint-disable */
    if (mail.search(
            /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/) ===
        -1) {
      message = 'Wrong email format';
    }
    /* eslint-enable */

    setValidation((prevState) => ({
      ...prevState,
      mail: {valid: message === '', msg: message},
    }));
  };

  const validateAddress = (address) => {
    let message = '';
    if (signupCredentials.address === '') {
      message = 'Address is required!';
    }

    setValidation((prevState) => ({
      ...prevState,
      address: {valid: message === '', msg: message},
    }));
  };

  const validate = () => {
    validateUsername(signupCredentials.username);
    validatePassword(signupCredentials.password);
    validateRePassword(signupCredentials.rePassword);
    validateMail(signupCredentials.mail);
    validatePhone(signupCredentials.phone);
    validateAddress(signupCredentials.address);
  };

  const onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setSignupCredentials((prevState) => ({...prevState, [name]: value}));
    switch (name) {
      case 'username':
        setSignupCredentials(
            (prevState) => ({...prevState, prevUsername: prevState.username}));
        validateUsername(value);
        break;
      case 'password':
        validatePassword(value);
        break;
      case 'rePassword':
        validateRePassword(value);
        break;
      case 'phone':
        validatePhone(value);
        break;
      case 'mail':
        validateMail(value);
        break;
      case 'address':
        setAddressLen(value.length);
        validateAddress(value);
        break;
    }
  };

  const onRegionChange = (regionChange) => {
    setRegion((prevState) => ({...prevState, ...regionChange}));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    validate();
    if (checkValidity()) {
      const signupRequest = {
        username: signupCredentials.username,
        password: signupCredentials.password,
        mail: signupCredentials.mail,
        phone: signupCredentials.phone,
        address: signupCredentials.address,
        userTypeId: signupCredentials.userTypeId,
        provinceId: region.provinceId,
      };

      setLoading(true);
      authService.signup(signupRequest).then((data) => {
        setLoading(false);
        authContext.login(data.token);
        navigate('/home', {replace: true});
      }).catch((error) => {
        setLoading(false);
        console.log(error.response.data.msg);
        setSignupErr(error.response.data.msg);
      });
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
          <Card.Title>Signup</Card.Title>
          <Card.Body>
            <Form noValidate onSubmit={onSubmit}>
              <Row>
                <Col>
                  <Form.FloatingLabel className="mb-3"
                    controlId="signupUsername" style={{position: 'relative'}}
                    label="Username">
                    <OverlayTriggerWrapper msg={validation.username.msg}>
                      <Form.Control type="text" name="username"
                        value={signupCredentials.username}
                        onChange={onChange}
                        isInvalid={validation.username.msg !== ''}/>
                    </OverlayTriggerWrapper>
                  </Form.FloatingLabel>

                  <Form.FloatingLabel className="mb-3"
                    controlId="signupPassword" style={{position: 'relative'}}
                    label="Password">
                    <OverlayTriggerWrapper msg={validation.password.msg}>
                      <Form.Control type="password" name="password"
                        value={signupCredentials.password}
                        onChange={onChange}
                        isInvalid={validation.password.msg !== ''}/>
                    </OverlayTriggerWrapper>
                  </Form.FloatingLabel>

                  <Form.FloatingLabel className="mb-3"
                    controlId="signupRePassword" style={{position: 'relative'}}
                    label="Confirm Password">
                    <OverlayTriggerWrapper msg={validation.rePassword.msg}>
                      <Form.Control type="password" name="rePassword"
                        value={signupCredentials.rePassword}
                        onChange={onChange}
                        isInvalid={validation.rePassword.msg !== ''}/>
                    </OverlayTriggerWrapper>
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.FloatingLabel className="mb-3" controlId="signupMail"
                    style={{position: 'relative'}} label="Email">
                    <OverlayTriggerWrapper msg={validation.mail.msg}>
                      <Form.Control type="mail" name="mail"
                        value={signupCredentials.mail}
                        onChange={onChange}
                        isInvalid={validation.mail.msg !== ''}/>
                    </OverlayTriggerWrapper>
                  </Form.FloatingLabel>

                  <Form.FloatingLabel className="mb-3" controlId="signupPhone"
                    style={{position: 'relative'}} label="Phone">
                    <OverlayTriggerWrapper msg={validation.phone.msg}>
                      <Form.Control type="phone" name="phone"
                        value={signupCredentials.phone}
                        onChange={onChange}
                        isInvalid={validation.phone.msg !== ''}/>
                    </OverlayTriggerWrapper>
                  </Form.FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Form.Group className="mb-3" controlId="signupRegion">
                  <Form.Label>Region</Form.Label>
                  <Form.Control as={RegionGroup} name="region"
                    onChange={onRegionChange}/>
                </Form.Group>
              </Row>

              <Row>
                <Form.FloatingLabel className="mb-3" controlId="signupAddress"
                  style={{position: 'relative'}} label="Address">
                  <OverlayTriggerWrapper msg={validation.address.msg}>
                    <Form.Control as="textarea" name="address"
                      maxLength={125}
                      value={signupCredentials.address}
                      onChange={onChange}
                      isInvalid={validation.address.msg !== ''}
                    />
                  </OverlayTriggerWrapper>
                  <Form.Text style={{
                    position: 'absolute',
                    right: '25px',
                    bottom: '0',
                  }}>{addressLen} / 125</Form.Text>
                </Form.FloatingLabel>
              </Row>

              <Row md={4} className="justify-content-center">
                <Loading loading={loading}>
                  <Button variant="primary" type="submit">
                    Signup
                  </Button>
                </Loading>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>

      <Alert variant="danger" show={signupErr !== ''}
        onClose={() => setSignupErr('')} dismissible
        style={{position: 'absolute', top: '0px'}}>
        <Alert.Heading>Signup Error!</Alert.Heading>
        <p>
          {signupErr}
        </p>
      </Alert>
    </Container>
  );
}

export default Signup;
