import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import { Button, Nav } from "react-bootstrap";

const ClickToAction = () => {
    return (
        <Card className="p-3">
            <Card.Body className="text-start">
                <Card.Title>
                    DEV Community 👩‍💻👨‍💻 is a community of 963,200 amazing
                    developers
                </Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    ratione suscipit.
                </Card.Text>
                <Nav className="row p-2 text-center">
                    <Button variant="outline-primary">
                        <Link to="/register">Create account</Link>
                    </Button>
                    <Nav.Item className="p-2 m-a">
                        <Link to="/login">Login</Link>
                    </Nav.Item>
                </Nav>
            </Card.Body>
        </Card>
    );
};

export default ClickToAction;
