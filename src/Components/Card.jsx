import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {delPost} from './funciones/post'



function CardComponents({productos}) {

const editarPost=(obj)=>{
      localStorage.setItem("userEdit",JSON.stringify(obj))
      window.location.href="/edit"
}

const eliminarPost=async(id)=>{
      const res =await delPost(id)

}

  return (
    <>
      {
        productos.map((item, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Nombre: {item.producto_name}</Card.Title>
              <Card.Img variant="top" src={item.img} />
              <Card.Text>
                Precio: {item.producto_precio}
              </Card.Text>
              <Card.Text>
                Stock: {item.producto_stock}
              </Card.Text>
              <Button variant="primary">Mas informacion!</Button>
              <Button variant='warning' onClick={()=>eliminarPost(item.id)}>  eliminar </Button>
              <Button variant='danger'  onClick={()=>editarPost(item)}> Editar </Button>
            </Card.Body>
          </Card>
        ))
      }
    </>
    );
}

export default CardComponents;