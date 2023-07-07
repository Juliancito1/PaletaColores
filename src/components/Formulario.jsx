import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Listacards from "./Listacards";
import { useForm } from "react-hook-form";
import { crearColor, obtenerColores } from "../helpers/queries";
import Swal from "sweetalert2";
const Formulario = () => {
  const [colores, setColores] = useState([]);
  const [colorName,setColorName] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    obtenerColores().then((respuesta) => {
      if (respuesta) {
        console.log(respuesta);
        setColores(respuesta);
      } else {
        Swal.fire(
          "Se produjo un error al intentar cargar los datos",
          `Intente realizar esta operacion mas tarde`,
          "error"
        );
      }
    });
  }, []);

  const onSubmit = (color) => {
    crearColor(color).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Color Agregado",
          "El Color fue agregado con éxito",
          "success"
        );
        obtenerColores().then((respuesta) => {
          setColores(respuesta);
        });
        reset();
      } else {
        console.log("error");
      }
    });
  };
  return (
    <section>
      <section className="bg-warning pb-4">
        <h3 className="text-center mb-3">Administrar Colores</h3>
        <aside className="d-flex flex-column flex-md-row align-items-center">
          <div
            className="ms-md-5 border border-2 border-dark"
            style={{ backgroundColor: `${colorName}`, padding: "70px"}}
          ></div>
          <Form className="mt-4 ms-md-5 mt-lg-0 w-50" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formColor">
              <Form.Control
                type="text"
                onKeyUp={(e)=> setColorName(e.target.value)}
                placeholder="Ingrese un color Ej: Blue"
                {...register("color", {
                  required: "Ingrese un color",
                })}
              />
              <Form.Text className="text-danger">
                {errors.color?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">
              Guardar
            </Button>
          </Form>
        </aside>
      </section>
      <Listacards setColores={setColores} colores={colores}></Listacards>
    </section>
  );
};

export default Formulario;
