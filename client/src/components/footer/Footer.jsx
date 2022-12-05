import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const footer = () => {
    return (
        <div className="text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="" className="me-4 text-reset">
                        <span fab icon="facebook-f" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <span fab icon="twitter" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <span fab icon="google" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <span fab icon="instagram" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <span fab icon="linkedin" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <span fab icon="github" />
                    </a>
                </div>
            </section>

            <section className="">
                <Container className="text-center text-md-start mt-5">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <span icon="gem" className="me-3" />
                                WorldDev
                            </h6>
                            <p>
                                Here you can use rows and columns to organize
                                your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </Col>

                        <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Categories
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    Angular
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    React
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Vue
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Laravel
                                </a>
                            </p>
                        </Col>

                        <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Help
                                </a>
                            </p>
                        </Col>

                        <Col
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4"
                        >
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <span icon="home" className="me-2" />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <span icon="envelope" className="me-3" />
                                info@worlddev.com
                            </p>
                            <p>
                                <span icon="phone" className="me-3" /> + 01 234
                                567 88
                            </p>
                            <p>
                                <span icon="print" className="me-3" /> + 01 234
                                567 89
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="worlddev">
                    worlddev
                </a>
            </div>
        </div>
    );
};
export default footer;
