import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Cardcolor from './Cardcolor';

const Listacards = ({listadoColor, borrarColor}) => {
    return (
        <ListGroup>
            {
                listadoColor.map((color,indice) => <Cardcolor key={indice} borrarColor={borrarColor} color={color}></Cardcolor>)
            }
        </ListGroup>
    );
};

export default Listacards;