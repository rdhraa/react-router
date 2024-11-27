import React from 'react'
import { Card,Button,Row,Col } from 'react-bootstrap'

const Home = () => {
    
  return (
    <div className="containe-fluid">
      <Row className="g-3">
      <Col xs={12} md={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/cake4.webp" width={400} height={450}/>
      <Card.Body>
        <Card.Title>Cake 1</Card.Title>
        <Card.Text>
          Rs 3500
        </Card.Text>
        <Button variant="danger">Order Now</Button> 
      </Card.Body>
    </Card>
    </Col>
    
    <Col xs={12} md={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/cake5.jpg" width={400} height={450} />
      <Card.Body>
        <Card.Title>Cake 2</Card.Title>
        <Card.Text>
          Rs 3000
        </Card.Text>
        <Button variant="danger">Order Now</Button> 
      </Card.Body>
    </Card>
    </Col>

    <Col xs={12} md={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="cake8.avif" width={400} height={450} />
      <Card.Body>
        <Card.Title>Cake 3</Card.Title>
        <Card.Text>
          Rs 2000
        </Card.Text>
        <Button variant="danger">Order Now</Button> 
      </Card.Body>
    </Card>
    </Col>

    <Col xs={12} md={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="cake6.jpg" width={400} height={450} />
      <Card.Body>
        <Card.Title>Cake 4</Card.Title>
        <Card.Text>
          Rs 1800
        </Card.Text>
        <Button variant="danger">Order Now</Button> 
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </div>
  )
}

export default Home
