import { Col } from "react-bootstrap";
import Logo from '../../assets/images/bellz_footer_logo.png';
import ScrollToTopButton from "../scroll-to-top";


export default function Footer(): React.JSX.Element {
    return (
        <>
            <div>
                <ScrollToTopButton />
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#1c2331" }}>
                    <section
                        className="d-flex justify-content-between p-4"
                        style={{ backgroundColor: "#243c4f" }}
                    >
                        <Col className="text-center">
                            <div className="me-5">
                                <img src={Logo} width={180} />
                            </div>
                        </Col>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact Us</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: 60, backgroundColor: "#243c4f", height: 2 }}
                                    />
                                    <p>
                                        <a href="#!" className="text-white">1B, Makarios Ajah Lagos State</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">+234 706 8837 936</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">bellzblog@gmail.com</a>
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Useful Links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: 60, backgroundColor: "#243c4f", height: 2 }}
                                    />
                                    <p>
                                        <a href="#!" className="text-white">About Us</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Contact Us</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">FAQ</a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: 60, backgroundColor: "#243c4f", height: 2 }}
                                    />
                                    <p>
                                        <a href="#!" className="text-white">Privacy Policy</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Terms of Uses</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Site Map</a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Download App</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: 60, backgroundColor: "#243c4f", height: 2 }}
                                    />
                                    <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div
                        className="text-center p-3" style={{ backgroundColor: "#007bff" }}>
                        © {new Date().getFullYear()} Bellz Blog
                    </div>
                </footer>
            </div>
        </>
    );
}