import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import authService from "../../services/auth-service";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"username": '', "password": '', "remember": false};
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const loginRequest = {username: this.state.username, password: this.state.password};
        authService.login(loginRequest)
            .then(response => {
                console.log(response.data.token);
                localStorage.setItem("authToken", response.data.token);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <Card>
                <Card.Title>Login</Card.Title>
                <Card.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group className="mb-3" controlId="loginUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Username" onChange={this.onChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="loginRememberme">
                            <Form.Check type="checkbox" name="remember" label="Remember me" onChange={this.onChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default Login;
