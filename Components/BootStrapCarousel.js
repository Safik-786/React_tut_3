import React from 'react'
import { Carousel, Container,Row,Col } from 'react-bootstrap'

function BootStrapCarousel() {
  return (
    <>
        <Container fluid>
            <Row className='justify-center'>
                <Col >
                    <Carousel >
                        <Carousel.Item interval={2000}>
                            <img src="../img/bg3.jpg" alt=""  width="800px" height="390"
                            className='d-block w-100'/>
                            <Carousel.Caption>
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste earum recuvgh hgfghfghf jkjkd.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src="../img/bg4.jpg" alt="" width="800px" height="390" className='d-block w-100'/>
                            <Carousel.Caption>
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste earum recuvgh hgfghfghf jkjkd.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src="../img/bg5.jpg" alt="" width="800px" height="390" className='d-block w-100'/>
                            <Carousel.Caption>
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste earum recuvgh hgfghfghf jkjkd.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src="../img/bg12.jpg" alt="" width="800px" height="390" className='d-block w-100'/>
                            <Carousel.Caption>
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste earum recuvgh hgfghfghf jkjkd.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src="../img/bg13.jpg" alt="" width="800px" height="390" className='d-block w-100'/>
                            <Carousel.Caption>
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste earum recuvgh hgfghfghf jkjkd.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src="../img/bgGroot.jpg" alt="" width="800px" height="390" className='d-block w-100'/>
                            <Carousel.Caption>
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste earum recuvgh hgfghfghf jkjkd.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src="../img/404Notfound.jpg" alt="" width="800px" height="390" className='d-block w-100'/>
                            <Carousel.Caption>
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste earum recuvgh hgfghfghf jkjkd.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default BootStrapCarousel
