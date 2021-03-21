import React, {Component} from 'react';
import { Form, Button, Card, Container  } from "react-bootstrap"

class SignUp extends Component {
    render() {
        return (
            <Container className="align-items-center justify-content-center" style={{ width: "430px" ,height :"492px" ,backgroundColor :"blue"}}>
                <h2 className="text-center mb-4">Log In</h2>
                {/*{error && <Alert variant="danger">{error}</Alert>}*/}
                <Form onSubmit="">
                    <Form.Group id="email">
                        {/*<Form.Label>Email</Form.Label>*/}
                        <Form.Control type="email"  required />
                    </Form.Group>
                    <Form.Group id="password">
                        {/*<Form.Label>Password</Form.Label>*/}
                        <Form.Control type="password"  required />
                    </Form.Group>
                    <Button  className="w-100 btn btn-warning" type="submit">
                        Log In
                    </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <a to="/forgot-password">Forgot Password?</a>
                </div>

                <div className="w-100 text-center mt-2">
                    Need an account? <a to="/signup">Sign Up</a>
                </div>
            </Container>

        );
    }
}

export default SignUp;