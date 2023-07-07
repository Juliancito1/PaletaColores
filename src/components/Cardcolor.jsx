import { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Form } from "react-bootstrap";
import { borrarColor, editarColor, obtenerColor, obtenerColores } from "../helpers/queries";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const Cardcolor = ({ color, setColores }) => {
  const eliminarColor = () => {
    borrarColor(color._id).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(`El color fue borrado con exito`, "Color borrado", "success");
        obtenerColores().then((respuesta) => {
          setColores(respuesta);
        });
      }
    });
  };

  const [colorName,setColorName] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onEdit = (id) => {
    useEffect(() => {
      obtenerColor(id).then((respuesta)=>{
        if(respuesta)
        {
          setValue("color",respuesta.color)
        }
      })
    })
  };

  const onSubmit = (colorEditado) => {
    editarColor(colorEditado,color._id).then((respuesta) => {
      if(respuesta && respuesta.status === 200)
      {
        Swal.fire(
          'Color actualizado',
          'El Color fue actualizado',
          'success'
        )
        obtenerColores().then((respuesta) => {
          if(respuesta)
          {
            setColores(respuesta)
          }
        })
      }else{
        Swal.fire(
          'Se produjo un error al intentar actualizar los datos',
          'Error al editar el color',
          'error');
      }
    })
  };

  return (
    <Col xs={12} md={6} lg={3}>
      <Card className="my-3">
        <Card.Header>{`${color.color}`}</Card.Header>
        <Card.Body>
          <section className="d-flex justify-content-center bg-warning p-3">
            <div
              className="w-50 border border-2 border-dark contenedorColor"
              style={{ backgroundColor: `${color.color}`, padding: "90px" }}
            ></div>
          </section>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <div>
            <Button variant="warning me-2" onClick={onEdit(color._id)} onClickCapture={handleShow}  >
              Editar
            </Button>
            <Button variant="danger" onClick={eliminarColor}>
              Borrar
            </Button>
          </div>
        </Card.Footer>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mt-4 ms-md-5 mt-lg-0 w-50" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formColor">
              <Form.Control
                type="text"
                onChange={(e)=> setColorName(e.target.value)}
                placeholder="Ingrese un color Ej: Blue"
                {...register("color", {
                  required: "Ingrese un color",
                })}
              />
              <Form.Text className="text-danger">
                {errors.color?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit" onClick={handleClose}>
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default Cardcolor;
