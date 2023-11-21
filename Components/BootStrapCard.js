import React from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function BootStrapCard() {
  return (
    <Container className=''>
        <Row>
            <Col md={4}>
                <Card  border='primary'>
                    <Card.Header className='bg-danger'>This is card header</Card.Header>
                    <Card.Img src={require('../images/bg3.jpg')}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle>Card SubTitle</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae et soluta animi, adipisci voluptatum distinctio nobis architecto 
                        </Card.Text>
                        <Card.Link href='#'>Click me</Card.Link>
                    </Card.Body>
                    <div className='d-inline'>
                    <Button href='https://google.com' variant='primary'>Readmore..</Button>
                    </div>
                    <Card.Footer className='bg-danger'>This is card footer</Card.Footer>
                </Card>
            </Col>
            <Col md={4}>
                <Card bg='danger'>
                    <Card.Img src={require('../images/bg4.jpg')}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle>Card SubTitle</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae et soluta animi, adipisci voluptatum distinctio nobis architecto 
                        </Card.Text>
                    </Card.Body>
                    <div className='d-grid'>
                    <Button variant='success'>Readmore..</Button>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card bg='secondary'>
                    <Card.Img src={require('../images/bg5.jpg')}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle>Card SubTitle</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae et soluta animi, adipisci voluptatum distinctio nobis architecto 
                        </Card.Text>
                    </Card.Body>
                    <div className='d-inline'>
                    <Button variant='primary'>Readmore..</Button>
                    </div>
                </Card>
            </Col>
            <Col md={4} >
                <Card bg='secondary'>
                    <Card.Img src={require('../images/bg5.jpg')}/>
                    <Card.ImgOverlay >
                        <Card.Title className='text-white'>Card Title</Card.Title>
                        <Card.Subtitle className='text-white'>Card SubTitle</Card.Subtitle>
                        <Card.Text className='text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae et soluta animi, adipisci voluptatum distinctio nobis architecto 
                        </Card.Text>
                    </Card.ImgOverlay>
                    <div className='d-inline'>
                    <Button variant='primary'>Readmore..</Button>
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default BootStrapCard
