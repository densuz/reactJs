import React, { useReducer } from 'react';
import { Row, Container, Col, Card, CardImg, Button } from 'reactstrap';


//untuk deklarasi fungsi jumlah dan tambah
const initialState = {
    jumlah: 1,
    hargasatuan:1000,
    hargatotal:0
}

const reducer = (state, action) => {
    switch (action. type) {
        case 'tambah': return {
            ...state,
            jumlah:state.jumlah + 1,
            hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
        }
        case 'kurangi': return {
            ...state,
            jumlah: state.jumlah - 1,
            hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
        }
        default:
            return state

    }
}

function HookReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <Container>
            <br />
            <Row>
                <Col xs="6">
                    <Card>
                    <span class="border">
                        <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                        </span>
                    </Card>

                </Col>
                <Col xs="6">
                    <h3>Realme 5 Pro</h3>
                    <p>Harga</p>
                    <h3>Rp. {count.hargasatuan}</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={() => dispatch({type:'kurangi'})} color="danger">-</Button></Col>
                        <Col>{count.jumlah}</Col>
                        <Col><Button onClick={() => dispatch({type:'tambah'})} color="primary">+</Button></Col>

                    </Row>
                    <br/>
                    <Button color="primary" size="lg">Beli {count.hargatotal}</Button>
                    <Container>
                        <br/>
                   
                    <h5>Deskripsi</h5>
                    <hr/>
                    
                    <p>and instance of type Instance.Instance is optional and is mixed by default.A class or function component with config Config may be used in places that expect</p>
                  
                    
                    <br/>
                    
                    </Container>
                </Col>
                    
            </Row>
        </Container>

    );

}

export default HookReducer;