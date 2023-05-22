import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';

const Cardcolor = ({color,borrarColor}) => {
    return (
            <Col xs={12} md={6} lg={3}>
            <Card className='my-3'>
        <Card.Header>{`${color}`}</Card.Header>
      <Card.Body>
        <section className='d-flex justify-content-center bg-warning p-3'>
        <div className='w-50 border border-2 border-dark contenedorColor' style={{backgroundColor: `${color}` ,padding: '90px'}}></div>
        </section>
      </Card.Body>
        <Card.Footer className='d-flex justify-content-end'>
            <Button variant='danger' onClick={() => {borrarColor(color)}}>Borrar</Button>
        </Card.Footer>
    </Card>
            </Col>
    );
};

export default Cardcolor;