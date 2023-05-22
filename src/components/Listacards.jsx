import React from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import Cardcolor from './Cardcolor';

const Listacards = ({listadoColor, borrarColor}) => {
    return (
        <Container>
                <Row>
                    {
                listadoColor.map((color,indice) => <Cardcolor key={indice} borrarColor={borrarColor} color={color}></Cardcolor>)
                    }
                </Row>
        </Container>
    );
};

export default Listacards;