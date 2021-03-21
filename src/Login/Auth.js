import React, {Component} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import Login from "./Login";
import SignUp from "./SignUp";

class Auth extends Component {
    render() {
        return (
            <div className="container align-items-center justify-content-center">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="Login" title="Login">
                        <Login/>
                    </Tab>
                    <Tab eventKey="Sign-up" title="Sign Up">
                        <SignUp/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default Auth;