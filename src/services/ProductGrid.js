import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from "../Product";

class ProductGrid extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md><Product/></Col>
                    <Col md><Product/></Col>
                    <Col md><Product/></Col>
                    <Col md><Product/></Col>
                </Row>
                <Row>
                    <Col md><Product/></Col>
                    <Col md><Product/></Col>
                    <Col md><Product/></Col>
                    <Col md><Product/></Col>
                </Row>
            </Container>
        );
    }
}

export default ProductGrid;