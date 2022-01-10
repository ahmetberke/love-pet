import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import authService from "../../services/auth-service";
import RegionGroup from "../region-group/region-group";
import jwt_decode from "jwt-decode";

function Signup(props) {
    const navigate = useNavigate();

    const [signupCredentials, setSignupCredentials] = useState({
        userTypeId: 1,
        username: "",
        prevUsername: "",
        rePassword: "",
        password: "",
        phone: "",
        mail: "",
        address: ""
    });

    const [region, setRegion] = useState({countryId: -1, cityId: -1, provinceId: -1});

    const [validation, setValidation] = useState({
        username: {valid: false, msg: ''},
        password: {valid: false, msg: ''},
        rePassword: {valid: false, msg: ''},
        phone: {valid: false, msg: ''},
        mail: {valid: false, msg: ''},
        region: {valid: true, msg: ''}, //todo
    });

    const validateUsername = (username) => {
        let message = '';
        if (username.search(/^[a-zA-Z0-9-_]{7,14}$/) === -1) {
            message = "Your username should only consist alphanumeric characters of length between 7 and 14!";
        }

        if(message !== ''){
            setValidation(prevState => ({...prevState, username: {valid: false, msg: message}}));
        }
        else{
            if(signupCredentials.prevUsername !== username){
                authService.validateUsername(username)
                    .then(data => {
                        setValidation(prevState => ({...prevState, username: {valid: data.valid, msg: data.msg}}));
                        setSignupCredentials(prevState => ({...prevState, prevUsername: prevState.username}));
                    });
            }
        }
    }

    const validatePassword = (password) => {
        let message = '';
         if (password.length < 7) {
            message = "Your password needs a minimum of seven characters.";
        }
        if (password.length > 14) {
            message = "Your password needs a maximum of fourteen characters.";
        }
        if (password.search(/[a-z]/) === -1) {
            message = "Your password needs at least one lower case letter.";
        }
        if (password.search(/[A-Z]/) === -1) {
            message = "Your password needs at least one upper case letter.";
        }
        if (password.search (/[0-9]/) === -1) {
            message = "Your password needs a number.";
        }
        if (password.search(/^[a-zA-Z0-9_]{7,14}$/) === -1) {
            message = "Your password should only consist alphanumeric characters of length between 7 and 14!";
        }

        setValidation(prevState => ({...prevState, password: {valid: message === '', msg: message}}));
    }

    const validateRePassword = (rePassword) => {
        let message = '';
        if(rePassword !== signupCredentials.password){
            message = 'Password not match';
        }

        setValidation(prevState => ({...prevState, rePassword: {valid: message === '', msg: message}}));
    }

    const validatePhone = (phone) => {
        let message = '';
        if (phone.search(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/) === -1) {
            message = "Your phone should only consist numbers and should not start with 0 in format xxx xxx xxxx!";
        }

        setValidation(prevState => ({...prevState, phone: {valid: message === '', msg: message}}));
    }

    const validateMail = (mail) => {
        let message = '';
        if (mail.search(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/) === -1) {
            message = "Wrong email format";
        }

        setValidation(prevState => ({...prevState, mail: {valid: message === '', msg: message}}));
    }

    const validateRegion = (region) => {
        let message = '';
        if(region.countryId === -1 ||
            region.cityId === -1 ||
            region.provinceId === -1)
        {
            message = 'You should select country, city and province!';
        }

        setValidation(prevState => ({...prevState, region: {valid: message === '', msg: message}}));
    }

    const onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setSignupCredentials(prevState => ({...prevState, [name]: value}));
        switch(name){
            case 'username':
                setSignupCredentials(prevState => ({...prevState, prevUsername: prevState.username}));
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
        }
    }

    const onRegionChange = (regionChange) => {
        setRegion(prevState => ({...prevState, ...regionChange}));
        //validateRegion(region);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if(checkValidity()){
            const signupRequest = {
                username: signupCredentials.username,
                password: signupCredentials.password,
                mail: signupCredentials.mail,
                phone: signupCredentials.phone,
                address: signupCredentials.address,
                userTypeId: Number(signupCredentials.userTypeId),
                provinceId: region.provinceId
            };

            authService.signup(signupRequest)
                .then(data => {
                    console.log(jwt_decode(data.token));
                    localStorage.setItem("authToken", data.token);
                    navigate('/home', {replace: true});
                })
                .catch(error => {
                    console.log(error.msg);
                });
        }
    };

    const checkValidity = () => {
        for(let validationItem in validation){
            if(!validation[validationItem].valid){
                return false;
            }
        }

        return true;
    }

    return (
        <Card>
            <Card.Title>Signup</Card.Title>
            <Card.Body>
                <Form noValidate onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="signupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" name="username"
                                      value={signupCredentials.username}
                                      onChange={onChange}
                                      isInvalid={validation.username.msg !== ''}/>
                        <Form.Control.Feedback type="invalid">
                            {validation.username.msg}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"
                                      value={signupCredentials.password}
                                      onChange={onChange}
                                      isInvalid={validation.password.msg !== ''}/>
                        <Form.Control.Feedback type='invalid'>
                            { validation.password.msg }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signupRePassword" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="rePassword"
                                      value={signupCredentials.rePassword}
                                      onChange={onChange}
                                      isInvalid={validation.rePassword.msg !== ''}/>
                        <Form.Control.Feedback type='invalid'>
                            { validation.rePassword.msg }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signupMail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="mail" placeholder="Email" name="mail"
                                      value={signupCredentials.mail}
                                      onChange={onChange}
                                      isInvalid={validation.mail.msg !== ''}/>
                        <Form.Control.Feedback type='invalid'>
                            { validation.mail.msg }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signupPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="phone" placeholder="(xxx) xxx xxxx" name="phone"
                                      value={signupCredentials.phone}
                                      onChange={onChange}
                                      isInvalid={validation.phone.msg !== ''}/>
                        <Form.Control.Feedback type='invalid'>
                            { validation.phone.msg }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signupRegion">
                        <Form.Label>Region</Form.Label>
                        <Form.Control as={RegionGroup} type="input"
                                      name="region"
                                      onChange={onRegionChange}
                                      isInvalid={validation.region.msg !== ''}/>
                        <Form.Control.Feedback type='invalid'>
                            { validation.region.msg }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signupAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" placeholder="Address" name="address"
                            style={{ height: '100px' }}
                            value={signupCredentials.address}
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signupUserType">
                        <Form.Label>Account Type:</Form.Label>
                        <div key="inline-radio" className="mb-3"
                             onChange={onChange}>
                            <Form.Check
                                inline
                                defaultChecked
                                label="clinic"
                                value={1}
                                name="userTypeId"
                                type="radio"
                                id="inline-radio-1"
                            />
                            <Form.Check
                                inline
                                label="pet owner"
                                value={2}
                                name="userTypeId"
                                type="radio"
                                id="inline-radio-2"
                            />
                        </div>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Signup
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}


export default Signup;
