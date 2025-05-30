import React, { use } from "react";
import { Container,Row,Col,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'




function Cartas (agregarAlCarrito) {
  const  [Cartas , setCartas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCartas(data.results);
        setLoading(false);
      })
      .catch(error => console.error('Error en tu Pokedex:', error));
  }, []);

  



return(
<Container className="mt-5">
  {loading && <h1>Cargando...</h1>}    
  <h1>Productos</h1>
    <Row className="justify-content-center">
      {Cartas.map(char=>(
        <Col key={char.id}  md={4}>
          <Card  className="mt-2">
            <Card.Img  variant="top" src={char.image} />
            <Card.Body>
              <Card.Title>{char.name}</Card.Title>
               
              <Card.Text  className="mt-5">{char.species}</Card.Text>
              
            </Card.Body>
            
            <a href="#" class="btn btn-primary" onClick={() => agregarAlCarrito(char)} style={{ marginLeft: '10px' }}>Carrito</a>
          </Card>
        </Col>
      ))}
   
    </Row>
  </Container>

  
);




}
export default Cartas