import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product2 from "./Product2";

class ProductGrid2 extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col ><Product2/></Col>
                    <Col ><Product2/></Col>
                    <Col ><Product2/></Col>
                </Row>
                <Row>
                    <Col ><Product2/></Col>
                    <Col ><Product2/></Col>
                    <Col ><Product2/></Col>

                </Row>
            </Container>
        );
    }
}

export default ProductGrid2;