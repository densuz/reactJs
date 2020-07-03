import React from 'react'
import { Container, Row } from 'reactstrap'
import Rowproduct from './Rowproduct'

function ProductComp(){
    return (
        <div>
            <Container>
                <hr/>
                <h2>Produk</h2>
                <Row>
                    <Rowproduct/>
                    <Rowproduct/>
                    <Rowproduct/>
                    
                </Row>
            </Container>
        </div>


    )
}

export default ProductComp;