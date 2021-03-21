import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from "./Product";

class ProductGrid extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col ><Product/></Col>
                    <Col ><Product/></Col>
                    <Col ><Product/></Col>
                </Row>
                <Row>
                    <Col ><Product/></Col>
                    <Col ><Product/></Col>
                    <Col ><Product/></Col>

                </Row>
            </Container>
        );
    }
}

export default ProductGrid;