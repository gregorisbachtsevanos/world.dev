import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

const About = () => {
    return (
        <Container>
            <Card className="my-2 text-start">
                <h4>About</h4>
                <Card.Title className="w-75 m-auto"></Card.Title>
                <Card.Body className="w-75 m-auto">
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam nemo doloremque quae eum adipisci neque labore
                        voluptates porro, animi at explicabo ab dolor laudantium
                        odit nisi iure? Tempora, exercitationem optio?
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default About;
