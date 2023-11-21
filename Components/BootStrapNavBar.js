import React from 'react'
import { Col, Container, DropdownHeader, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'

function BootStrapNavBar() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar bg='secondary' variant='secondary' expand="md" fixed=''>
                            <Container>
                                <Navbar.Brand href='#' className='text-white'>
                                    Logo
                                    &nbsp;
                                    <img src={require('../images/404Notfound.jpg')} alt="" height="25px" width='25' className='rounded' />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls='my-nav' />
                                <Navbar.Collapse id="my-nav">
                                    <Nav className=' me-auto fw-bold'>
                                        <Nav.Link href='#' >Home </Nav.Link>
                                        <NavDropdown title="Services" id='my-nav'>
                                            <DropdownHeader>Heading1</DropdownHeader>
                                            <NavDropdown.Item href='#'>Service-1</NavDropdown.Item>
                                            <NavDropdown.Item href='#'>Service-2</NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <DropdownHeader>Heading1</DropdownHeader>
                                            <NavDropdown.Item href='#'>Service-3</NavDropdown.Item>
                                            <NavDropdown.Item href='#'>Service-4</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href='#' >Contact </Nav.Link>
                                        <Nav.Link href='#' >About </Nav.Link>
                                    </Nav>
                                    <Navbar.Text>
                                        Sign in Here <a href="">SignUp</a>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <h2>This is random textlorem34 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum esse placeat ex tempora. Eius nemo aperiam cumque explicabo est voluptate, quis aliquam incidunt expedita voluptatem pariatur recusandae nihil vero accusantium cum quos inventore sit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nobis!00 Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et laboriosam, reprehenderit accusantium exercitationem nam laborum blanditiis quo, beatae explicabo! Architecto voluptates blanditiis possimus iusto modi esse debitis praesentium asperiores repudiandae ducimus incidunt, optio nesciunt obcaecati sit reprehenderit. Ut fugit quis, blanditiis vel voluptate, libero dolores tempora ad ullam placeat dolorum vitae expedita. Veniam natus perferendis nesciunt illum minus reprehenderit porro, beatae, et eaque, provident aliquid quasi rerum vitae. Vitae repellat tempore aut inventore incidunt dolor tempora rem, eaque ducimus dicta ipsam quo soluta suscipit vero aliquid iure optio? Cumque maiores eligendi deleniti laboriosam fugiat odio doloremque voluptatem minus ex. Sint sunt nemo eligendi rem dicta explicabo tempora molestias distinctio culpa, quis, inventore vitae? Error provident, dignissimos mollitia consequatur optio vero tempora ab fugiat repellendus tempore inventore laborum accusantium ut deleniti. Eaque similique nihil deleniti animi facere, voluptas facilis ipsum sequi autem blanditiis sit atque optio veniam iure soluta ducimus distinctio veritatis harum. Nam impedit id sequi odio rem nobis earum qui animi repudiandae aperiam harum, commodi ullam iste iusto exercitationem porro voluptates non sapiente? Maiores quidem, maxime quam obcaecati accusantium accusamus minima. Ex recusandae voluptates iure eligendi debitis rerum, obcaecati natus, iusto consectetur voluptatibus molestias, consequuntur similique deserunt est perferendis. Eum, recusandae! Porro inventore, eius obcaecati ab quis quam aperiam neque, omnis quibusdam minima repellendus temporibus? Illum itaque dolor reprehenderit corrupti molestiae aperiam quia quae dolore, deserunt est optio natus, quas quam, aspernatur maiores! Ab suscipit illo impedit repellendus veniam officia nostrum natus ducimus? Modi tenetur, nisi dignissimos sed optio architecto quidem velit expedita reiciendis cum repudiandae recusandae. Ipsam ea eius provident atque dicta itaque impedit, unde accusantium iste eveniet cum minus aliquid quae alias reiciendis dolor minima ipsum. Obcaecati rem animi sint officiis deleniti quam beatae officia saepe delectus perspiciatis modi dolorum quia totam molestias at quas laborum debitis earum sapiente, quibusdam soluta unde doloribus praesentium? Iste, et. Voluptas quae tenetur velit magnam delectus molestias eveniet corporis est perferendis at nobis nisi consequuntur hic laborum odit repudiandae cupiditate autem aut, debitis corrupti sequi atque quaerat earum veritatis! Tempore nesciunt velit iusto sequi error debitis iste quibusdam dicta esse dolorum blanditiis totam ab commodi voluptas exercitationem maiores consectetur quaerat minus quidem dolor voluptates deserunt, provident accusamus omnis. Culpa corporis suscipit rerum, ipsum distinctio, sed ullam quam totam cupiditate delectus dicta quae magni, iusto nulla. Enim quis libero minus fugiat, ipsa minima, beatae eos exercitationem eius provident, ratione amet nulla ducimus accusamus quo laudantium ad optio. Rem, fuga, veniam ut incidunt eos illum nihil laboriosam aliquid earum exercitationem dolorum minima architecto laborum provident voluptas suscipit nisi velit? Itaque aspernatur tempore aperiam quaerat nemo, corporis, hic corrupti eius beatae cumque atque nisi facere voluptate recusandae deleniti animi odit blanditiis dolorum porro harum non consequatur eos similique eum! Maxime adipisci consequuntur similique impedit repellendus incidunt nemo, veritatis commodi eligendi mollitia ad excepturi, molestiae et deleniti consequatur nam! Sapiente ratione alias delectus iure obcaecati architecto, animi illo maiores! Ea reiciendis recusandae alias assumenda, eligendi et esse aut provident id veniam. Ratione unde dolor tenetur officia nobis, voluptate veritatis beatae fugit ducimus ullam officiis perspiciatis explicabo voluptatibus exercitationem quidem dolorem sit itaque molestiae sunt amet. Veniam assumenda recusandae in tempora doloremque blanditiis, modi ipsa alias ut aliquam! Tenetur illum a iure facilis perspiciatis possimus assumenda cumque odio autem, vitae impedit quisquam necessitatibus dolorem sint, optio facere quidem quae doloremque et sunt earum ipsam. Adipisci enim accusamus voluptates repellendus cumque magnam sed eos aliquid ab obcaecati. Neque aliquam magni, fuga natus deserunt, quas quaerat optio expedita corporis modi reprehenderit, veniam vero? Temporibus eligendi culpa ratione dolores? Ex ut porro, consectetur distinctio corrupti quaerat impedit nihil modi non provident veritatis necessitatibus nisi adipisci nostrum voluptas voluptatum, ab minus perspiciatis ipsam totam expedita repellat facere ipsa recusandae? Veritatis deserunt tempora quisquam, vitae debitis voluptas non dolore accusantium. Sit porro eligendi, est voluptas iste expedita veritatis aut velit voluptatibus! Modi quia eaque suscipit! Error cupiditate delectus optio asperiores. Error velit mollitia distinctio, quasi commodi laboriosam magni ab! Nemo molestias deserunt eum nostrum, ipsa tempore. Voluptatem, libero accusantium necessitatibus voluptas temporibus saepe. Perspiciatis eos iusto assumenda magni fugiat, in impedit aut voluptatem explicabo id. Possimus ea cumque saepe consequatur alias sint molestiae earum, eaque atque vel consequuntur dignissimos nisi a rem officia quod id? Tenetur, quidem. Reiciendis, soluta. Explicabo, iusto voluptatibus. Neque dolores non omnis nesciunt similique aut repellat assumenda, minima quam. Saepe soluta, maiores, rem sit dolorum possimus voluptatum necessitatibus dolor corrupti sequi nisi fugit officiis! Doloribus adipisci fuga nostrum placeat est minus numquam soluta consequatur rem fugiat facilis possimus delectus iure, exercitationem id. Asperiores ipsum placeat, animi fuga nam quo explicabo architecto ut expedita dolorem rerum reprehenderit distinctio recusandae dolor deleniti facere earum quae debitis vel nulla in cum. Sapiente nihil, quasi earum incidunt fugiat corrupti laudantium velit aspernatur rem vel minus expedita nostrum iusto doloribus laborum quae omnis in, nemo cupiditate explicabo voluptas repellendus officia quia perspiciatis. Quo nam similique provident illum vitae quas quae quaerat dolores maxime exercitationem ab maiores nulla a, officia dolore quibusdam voluptates, voluptate sapiente, iure cumque quam numquam placeat. Cupiditate eum, cumque cum quidem nam quibusdam! Commodi tempora dolore maxime nostrum quas cumque nobis ab ex earum est vitae, laborum doloremque ratione vel quo qui rerum totam harum iure ad? Voluptatem ad iure asperiores impedit, tenetur odio, vel quo officia commodi error, praesentium repellat expedita dignissimos quam quis voluptatibus! Consequuntur tempore quam, enim quas vel quod voluptas veritatis placeat dicta reprehenderit porro nisi sed sunt hic necessitatibus, odit ipsum? Tenetur ex eum ipsam, nisi animi impedit quam nam necessitatibus neque tempore itaque blanditiis voluptas distinctio reiciendis voluptates recusandae vel repudiandae nesciunt. Illo nihil iste, sed minus amet veniam? Quis mollitia cupiditate quibusdam, culpa libero eos ab totam alias id officia quasi esse provident odit aliquid consequuntur nisi obcaecati, quod sed, aut voluptates in accusamus fugit repellendus quas. Asperiores perspiciatis vero in ullam fugiat commodi quasi praesentium rem dolore veniam animi quisquam facilis natus aliquid delectus sed velit omnis eaque rerum, voluptatibus vitae at blanditiis ea. Sit, ratione atque? Asperiores, recusandae.
                    </h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BootStrapNavBar
