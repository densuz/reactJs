import React, { useReducer } from 'react';
import { Row, Container, Col, Card, CardImg, Button } from 'reactstrap';

//untuk deklarasi fungsi jumlah dan tambah
const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'tambah': return state + 1
        case 'kurangi': return state - 1
        default:
            return state

    }
}

function qity() {
    const [count, dispatch] = useReducer(reducer, initialState)
    
    return (
        <Container>
            <br />
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                    </Card>

                </Col>
                <Col xs="6">
                    <h3>Realme 5 Pro</h3>
                    <p>Harga</p>
                    <h3>Rp. 2.500.000</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={() => dispatch('kurangi')} color="danger">-</Button></Col>
                        <Col>{count}</Col>
                        <Col><Button onClick={() => dispatch('tambah')} color="primary">+</Button></Col>

                    </Row>
                </Col>

            </Row>
        </Container>

    );

}

export default qity;