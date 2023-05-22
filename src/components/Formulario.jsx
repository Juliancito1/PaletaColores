import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap';
import Cardcolor from './Cardcolor';
const Formulario = () => {
    return (
        <section>
            <section className='bg-warning pb-4'>
            <h3 className='text-center mb-3'>Administrar Colores</h3>
            <aside className='d-flex'>
                <div className='ms-lg-5 border border-2 border-dark' style={{backgroundColor: 'blue',padding: '90px', display: 'inline'}}></div>
                <Form className='ms-lg-5 mt-lg-5 w-50'>
                    <Form.Group className="mb-3" controlId="formColor">
                    <Form.Control type="text" placeholder="Ingrese un color Ej: Blue" />
                    </Form.Group>
                </Form>
                </aside>
            </section>
            <Cardcolor></Cardcolor>
        </section>
    );
};

export default Formulario;