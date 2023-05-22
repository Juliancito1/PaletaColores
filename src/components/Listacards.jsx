import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Cardcolor from './Cardcolor';

const Listacards = ({listadoColor}) => {
    return (
        <ListGroup>
            {
                listadoColor.map((color,indice) => <Cardcolor key={indice} color={color}></Cardcolor>)
            }
        </ListGroup>
    );
};

export default Listacards;