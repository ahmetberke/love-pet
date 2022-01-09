import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import authService from "../../services/auth-service";
import RegionGroup from "../region-group/region-group";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signupCredentials: {
                userTypeId: "1",
                username: "",
                password: "",
                phone: "",
                mail: "",
                address: ""
            },
            region: {
                countryId: 'none',
                cityId: 'none',
                provinceId: 'none'
            },
            prevUsername: "",
            rePassword: "",
            validation: {
                username: {valid: false, msg: ''},
                password: {valid: false, msg: ''},
                rePassword: {valid: false, msg: ''},
                phone: {valid: false, msg: ''},
                mail: {valid: false, msg: ''},
                region: {valid: false, msg: ''},
            }
        };
    }

    validateUsername = (username) => {
        let message = '';
        if (username.search(/^[a-zA-Z0-9-_]{7,14}$/) === -1) {
            message = "Your username should only consist alphanumeric characters of length between 7 and 14!";
        }

        if(message !== ''){
            this.setState(prevState =>({...prevState, validation: {...prevState.validation, username: {valid: false, msg: message}}}));
        }
        else{
            if(this.state.prevUsername !== username){
                authService.validateUsername(username)
                    .then(data => {
                        this.setState(prevState =>({...prevState, prevUsername: prevState.signupCredentials.username, validation: {...prevState.validation, username: {valid: data.valid, msg: data.msg}}}));
                    });
            }
        }
    }

    validatePassword = (password) => {
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

        this.setState(prevState =>({...prevState, validation: {...prevState.validation, password: {valid: message === '', msg: message}}}));
    }

    validateRePassword = (rePassword) => {
        let message = '';
        if(rePassword !== this.state.signupCredentials.password){
            message = 'Password not match';
        }

        this.setState(prevState =>({...prevState, validation: {...prevState.validation, rePassword: {valid: message === '', msg: message}}}));
    }

    validatePhone = (phone) => {
        let message = '';
        if (phone.search(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/) === -1) {
            message = "Your phone should only consist numbers and should not start with 0 in format xxx xxx xxxx!";
        }

        this.setState(prevState =>({...prevState, validation: {...prevState.validation, phone: {valid: message === '', msg: message}}}));
    }

    validateMail = (mail) => {
        let message = '';
        if (mail.search(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/) === -1) {
            message = "Wrong email format";
        }

        this.setState(prevState =>({...prevState, validation: {...prevState.validation, mail: {valid: message === '', msg: message}}}));
    }

    validateRegion = (region) => {
        let message = '';
        if(region.countryId === 'none' ||
            region.cityId === 'none' ||
            region.provinceId === 'none')
        {
            message = 'You should select country, city and province!';
        }

        this.setState(prevState =>({...prevState, validation: {...prevState.validation, region: {valid: message === '', msg: message}}}));
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        switch(name){
            case 'username':
                this.setState(prevState => ({...prevState, prevUsername: prevState.signupCredentials.username, signupCredentials: {...prevState.signupCredentials, [name]: value}}));
                this.validateUsername(value);
                break;
            case 'password':
                this.setState(prevState => ({...prevState, signupCredentials: {...prevState.signupCredentials, [name]: value}}));
                this.validatePassword(value);
                break;
            case 'rePassword':
                this.setState(prevState => ({...prevState, rePassword: value}));
                this.validateRePassword(value);
                break;
            case 'phone':
                this.setState(prevState => ({...prevState, signupCredentials: {...prevState.signupCredentials, [name]: value}}));
                this.validatePhone(value);
                break;
            case 'mail':
                this.setState(prevState => ({...prevState, signupCredentials: {...prevState.signupCredentials, [name]: value}}));
                this.validateMail(value);
                break;
        }
    }

    onRegionChange = (regionChange) => {
        this.setState(prevState => ({...prevState, region: {...prevState.region, ...regionChange}}));
        this.validateRegion({...this.state.region, ...regionChange});
    }

    onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if(this.checkValidity()){
            const signupRequest = {...this.state.signupCredentials, userTypeId: Number(this.state.signupCredentials.userTypeId), provinceId: Number(this.state.region.provinceId)};
            authService.signup(signupRequest)
                .then(token => {
                    console.log(token);
                    localStorage.setItem("authToken", token);
                });
        }
    };

    checkValidity = () => {
        for(let validationItem in this.state.validation){
            if(!this.state.validation[validationItem].valid){
                return false;
            }
        }

        return true;
    }

    render() {
        return (
            <Card>
                <Card.Title>Signup</Card.Title>
                <Card.Body>
                    <Form noValidate onSubmit={this.onSubmit}>
                        <Form.Group className="mb-3" controlId="signupUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="username"
                                          onChange={this.onChange}
                                          isInvalid={this.state.validation.username.msg !== ''}/>
                            <Form.Control.Feedback type="invalid">
                                {this.state.validation.username.msg}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password"
                                          onChange={this.onChange}
                                          isInvalid={this.state.validation.password.msg !== ''}/>
                            <Form.Control.Feedback type='invalid'>
                                { this.state.validation.password.msg }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signupRePassword" >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="rePassword"
                                          onChange={this.onChange}
                                          isInvalid={this.state.validation.rePassword.msg !== ''}/>
                            <Form.Control.Feedback type='invalid'>
                                { this.state.validation.rePassword.msg }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signupMail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="mail" placeholder="Email" name="mail"
                                          onChange={this.onChange}
                                          isInvalid={this.state.validation.mail.msg !== ''}/>
                            <Form.Control.Feedback type='invalid'>
                                { this.state.validation.mail.msg }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signupPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="phone" placeholder="(xxx) xxx xxxx" name="phone"
                                          onChange={this.onChange}
                                          isInvalid={this.state.validation.phone.msg !== ''}/>
                            <Form.Control.Feedback type='invalid'>
                                { this.state.validation.phone.msg }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signupRegion">
                            <Form.Label>Region</Form.Label>
                            <Form.Control as={RegionGroup} type="input"
                                          name="region"
                                          onChange={this.onRegionChange}
                                          isInvalid={this.state.validation.region.msg !== ''}/>
                            <Form.Control.Feedback type='invalid'>
                                { this.state.validation.region.msg }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signupAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Address"
                                name="address"
                                style={{ height: '100px' }}
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signupUserType">
                            <Form.Label>Account Type:</Form.Label>
                            <div key="inline-radio" className="mb-3" onChange={this.onChange}>
                                <Form.Check
                                    inline
                                    defaultChecked
                                    label="clinic"
                                    value="1"
                                    name="userTypeId"
                                    type="radio"
                                    id="inline-radio-1"
                                />
                                <Form.Check
                                    inline
                                    label="pet owner"
                                    value="2"
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
}


export default Signup;
