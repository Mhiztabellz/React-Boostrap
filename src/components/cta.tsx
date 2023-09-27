import { Col, Row, Button } from "react-bootstrap";

interface CtaProps {
    title: string;
    description: string;
    buttonText: string;
    image: string;
    url: string
}

export default function CallToAction(props: CtaProps): React.JSX.Element {
    const { title, description, buttonText, image, url } = props;
    return (
        <>
            <div className="container">
                <Row className="d-flex flex-column-reverse flex-sm-row">
                    <Col sm={12} md={6} className="order-2 order-sm-2">
                        <img src={image} alt="" width="90%" height="65%" />
                    </Col>
                    <Col sm={12} md={6} className="order-1 order-sm-1">
                        <div className="mt-5">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <Button className="btn btn-primary text-light">
                                <a href={url} className="text-light" style={{textDecoration: "none"}}>
                                    {buttonText}
                                </a>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}