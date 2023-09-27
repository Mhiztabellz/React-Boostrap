import Form from 'react-bootstrap/Form';
import { Col, Container, Row, Button } from "react-bootstrap";
import ContactImage from "../../assets/images/vector.png"

export default function ContactItem(): React.JSX.Element {
    return (
        <>
            <header className="header pb-5 mb-5">
                <Container className="pt-5">
                    <Row
                        className="justify-content-between align-items-center"
                        style={{ minHeight: "100px" }}
                    >
                        <Col sm={6} md={6} lg={6} xs={12}>
                            <div style={{ width: "80%" }} className='d-none d-sm-block'>
                                <img src={ContactImage} alt="Header" height="100%" width="100%" />

                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} xs={12}>
                            <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Okoromi Abel" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button href="../pages/about">Learn More</Button>
                            </Form>                    
                        </Col>
                    </Row>
                </Container>
            </header>



        </>
    )
}