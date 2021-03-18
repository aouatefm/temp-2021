import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Vendor from "./Vendor";

class VendorGrid extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md><Vendor/></Col>
                    <Col md><Vendor/></Col>
                    <Col md><Vendor/></Col>
                    <Col md><Vendor/></Col>
                </Row>
                <Row>
                    <Col md><Vendor/></Col>
                    <Col md><Vendor/></Col>
                    <Col md><Vendor/></Col>
                    <Col md><Vendor/></Col>
                </Row>
            </Container>
        );
    }
}

export default VendorGrid;