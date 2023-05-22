import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Listacards from './Listacards';
const Formulario = () => {

    const [color, setColor] = useState('');
    const [listadoColor, setListaColor] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setListaColor([...listadoColor,color])
        setColor('');
      }

    const borrarColor = (nombreColor) => {
        let arregloFiltrado = listadoColor.filter((elemColor) => elemColor !== nombreColor);
        setListaColor(arregloFiltrado);
      }

    return (
        <section>
            <section className='bg-warning pb-4'>
            <h3 className='text-center mb-3'>Administrar Colores</h3>
            <aside className='d-flex'>
                <div className='ms-md-5 border border-2 border-dark' style={{backgroundColor: `${color}`,padding: '90px', display: 'inline'}}></div>
                <Form className='ms-md-5 mt-lg-5 w-50' onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formColor">
                    <Form.Control type="text" placeholder="Ingrese un color Ej: Blue" onChange={(e) => setColor(e.target.value)} value={color}/>
                    </Form.Group>
                    <Button variant='success' type="submit">
                        Guardar
                    </Button>
                </Form>
                </aside>
            </section>
            <Listacards listadoColor={listadoColor} borrarColor={borrarColor} color={color}></Listacards>
        </section>
    );
};

export default Formulario;