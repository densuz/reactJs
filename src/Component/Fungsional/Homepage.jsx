import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
//import { CartContext } from '../../CartContex';
function HomePage() {
   
    return (
        <div>
            <Container>
                <Jumbotron>
                    <h1 className="display-3">Homepage </h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                <Container>
                <Row>
                    <Col><CardComp id="1" judul="Belajar Design" tanggal="24/06/2020" /></Col>
                    <Col><CardComp id="2" judul="Belajar Editing" tanggal="25/06/2020" /></Col>
                    <Col><CardComp id="3" judul="Belajar Jaringan" tanggal="26/06/2020" /></Col>
                </Row>
            </Container>
            </Container>
        </div>
    )
}

export default HomePage;