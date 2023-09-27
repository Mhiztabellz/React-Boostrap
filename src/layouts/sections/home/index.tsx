import { Container } from "react-bootstrap";
import "./index.css";

export default function NewsLetter(): React.JSX.Element {

    return (
        <Container>
            <section className="home-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="single">
                                <h2>Subscribe to our Newsletter</h2>
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                        <span className="input-group-btn">
                                            <button className="btn btn-theme" type="submit">Subscribe</button>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}