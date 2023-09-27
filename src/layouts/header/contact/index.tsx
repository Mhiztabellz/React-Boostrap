import { Col, Container, Row } from "react-bootstrap";

export default function ContactHeader(): React.JSX.Element {
    return (
        <header className="header pb-5 mb-5 bg-dark">
            <Container className="pt-5">
                <Row
                    className="justify-content-between align-items-center"
                    style={{ minHeight: "80px" }}
                >
                    <Col>
                        <div style={{ width: "80%" }}>
                            <h1 className="text-light ">Contact US!</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}