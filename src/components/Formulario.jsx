import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap';
const Formulario = () => {
    return (
        <section className='d-flex flex-column row bg-warning'>
            <h3>Administrar Colores</h3>
                <Form className='col-md-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Ingrese un color Ej: Blue" />
                    </Form.Group>
                </Form>
        </section>
    );
};

export default Formulario;