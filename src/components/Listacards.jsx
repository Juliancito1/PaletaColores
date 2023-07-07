import React from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import Cardcolor from './Cardcolor';

const Listacards = ({colores, setColores}) => {
    return (
        <Container>
                <Row>
                    {
                colores.map((color) => <Cardcolor key={color._id} color={color} setColores={setColores}></Cardcolor>)
                    }
                </Row>
        </Container>
    );
};

export default Listacards;