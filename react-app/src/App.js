import { useState,useEffect } from 'react';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [attractions, setAttraction] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/attractions")
      .then(res => res.json())
      .then(
        (result) => {
          setAttraction(result);
        },
      )
    }, [])

        return (
          <div>
            <Container>
              <Row>
                {attractions.map(attraction => (
                  <Col xs={12} sm={4} key={attraction.id}>
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={attraction.coverimage} />
                    <Card.Body>
                      <Card.Title>{attraction.name}</Card.Title>
                      <Card.Text className='text-truncate'>
                        {attraction.detail}
                      </Card.Text>
                      <Button variant="primary">Read more</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
  );
}

export default App;
