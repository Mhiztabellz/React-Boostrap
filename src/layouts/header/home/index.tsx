import {  Button, Col, Container, Row } from "react-bootstrap";
import HeaderImage from "../../../assets/images/vector.png";


export default function HomeHeader(): React.JSX.Element {
    return (
        <header className="header pb-5 mb-5 bg-dark">
            <Container className="pt-5">
                <Row
                    className="justify-content-between align-items-center"
                    style={{ minHeight: "400px" }}
                >
                    <Col sm={6} md={6} lg={6} xs={12}>
                        <div style={{ width: "80%" }}>
                            <h1 className="text-light">Welcome to Bellz Blog!</h1>
                            <p className="text-light">
                                We Make it Easy to Sell, Store and Use Cryptocurrency and We Also Have The Best Exchange
                                Rate Click below to learn more...
                            </p>
                        </div>
                        <Button href="./about">Learn More</Button>
                    </Col>
                    <Col sm={6} md={6} lg={6} xs={12} className="d-none d-sm-block">
                        <img src={HeaderImage} alt="Header" height="400px" width="400px" />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}