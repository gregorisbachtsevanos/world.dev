import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";

const Contact = () => {
    return (
        <>
            <Container className="w-50">
                <Card className="my-2 p-5 text-start">
                    <Card.Title className="w-75 m-auto">
                        <h3>Contact</h3>
                    </Card.Title>
                    <Card.Body className="w-75 m-auto">
                        <Card.Text>
                            <h5>
                                WORLD.DEV Community 👩‍💻👨‍💻 would love to hear from
                                you!
                            </h5>
                            <h6>
                                <Link className="text-decoration-none text-dark">
                                    Email: world@dev.to 😁
                                </Link>
                            </h6>
                            <h6>
                                <Link className="text-decoration-none text-dark">
                                    Twitter: @theworlddev 👻
                                </Link>
                            </h6>
                            <h6>
                                <Link className="text-decoration-none text-dark">
                                    Report a vulnerability: worlddev.to/security
                                    🐛
                                </Link>
                            </h6>
                            <h6>
                                <Link className="text-decoration-none text-dark">
                                    To report a bug, please create a bug report
                                    in our open source repository.
                                </Link>
                            </h6>
                            <h6>
                                <Link className="text-decoration-none text-dark">
                                    To request a feature, please start a new
                                    GitHub Discussion in the Forem repo!
                                </Link>
                            </h6>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;
