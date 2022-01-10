import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import authService from "../../services/auth-service";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";

function Login(props) {
    const navigate = useNavigate();

    const [loginCredentials, setLoginCredentials] = useState({username: '', password: '', remember: false});

    const onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setLoginCredentials(prevState => ({...prevState, [name]: value}));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const loginRequest = {username: loginCredentials.username, password: loginCredentials.password};

        authService.login(loginRequest)
            .then(data => {
                console.log(jwt_decode(data.token));
                localStorage.setItem("authToken", data.token);
                navigate('/home', {replace: true});
            })
            .catch(error => {
                console.log(error.msg);
            });
    };

    return (
        <Card>
            <Card.Title>Login</Card.Title>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="loginUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Username"
                                      value={loginCredentials.username}
                                      onChange={onChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password"
                                      value={loginCredentials.password}
                                      onChange={onChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginRememberme">
                        <Form.Check type="checkbox" name="remember" label="Remember me"
                                    checked={loginCredentials.remember}
                                    onChange={onChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;
