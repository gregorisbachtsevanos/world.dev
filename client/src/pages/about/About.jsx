import { Card, Container, CardGroup } from "react-bootstrap";
import Footer from "../../components/footer/Footer.jsx";

const About = () => {
    return (
        <>
            <Container className="w-75">
                <Card className="my-2 mx-auto w-75 p-5 text-start">
                    <CardGroup>
                        <Card.Title className="w-75 m-auto">About</Card.Title>
                        <Card.Body className="w-75 m-auto">
                            <Card.Text>
                                World.dev is a community of software developers
                                getting together to help one another out. The
                                software industry relies on collaboration and
                                networked learning. We provide a place for that
                                to happen. Because our application is open
                                source, you can inspect every little detail of
                                the code, or chip in yourself! Forem is
                                available for anyone interested in creating
                                similar communities in any niche or passion. We
                                believe in transparency and adding value to the
                                ecosystem. We hope you enjoy poking around and
                                participating!
                            </Card.Text>
                        </Card.Body>
                        <Card.Title className="w-75 m-auto">
                            Leadership
                        </Card.Title>
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/600x200.png"
                        />
                        <Card.Body className="w-75 m-auto">
                            <Card.Text>
                                WORLDDEV is led by Forem's founder Gregori
                                Bachtsevano.
                            </Card.Text>
                        </Card.Body>
                        <Card.Title className="w-75 m-auto">Team</Card.Title>
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/600x200.png"
                        />
                        <Card.Body className="w-75 m-auto">
                            <Card.Text>
                                Our team is distributed around the world. We
                                have no office, but we come together online each
                                day to build community and improve the software
                                careers of millions. Happy coding ❤️
                            </Card.Text>
                        </Card.Body>
                    </CardGroup>
                </Card>
            </Container>
            <Footer />
        </>
    );
};

export default About;
