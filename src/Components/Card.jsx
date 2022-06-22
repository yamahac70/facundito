import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponents(props) {
  return (
    <>
      {
        props.productos.map((item, index) => (
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
            </Card.Body>
          </Card>
        ))
      }
    </>
    );
}

export default CardComponents;