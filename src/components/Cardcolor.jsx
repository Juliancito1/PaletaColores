import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cardcolor = () => {
    return (
        <section className='mt-4'>
            <Card style={{ width: '300px' }}>
      <Card.Body>
        <Card.Title>Color</Card.Title>
        <Card.Text className='d-flex bg-warning'>
        <div className='ms-lg-5 border border-2 border-dark' style={{backgroundColor: 'blue',padding: '90px'}}></div>
        </Card.Text>
        <Card.Text className='d-flex justify-content-end'>
            <Button>Borrar</Button>
        </Card.Text>
      </Card.Body>
    </Card>
        </section>
    );
};

export default Cardcolor;