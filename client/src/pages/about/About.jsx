import { Card, Container, CardGroup } from "react-bootstrap";

const About = () => {
    return (
        <Container>
            <Card className="my-2 text-start">
                <CardGroup>
                    <Card.Title className="w-75 m-auto">About</Card.Title>
                    <Card.Body className="w-75 m-auto">
                        <Card.Text>
                            World.dev is a community of software developers
                            getting together to help one another out. The
                            software industry relies on collaboration and
                            networked learning. We provide a place for that to
                            happen. Because our application is open source, you
                            can inspect every little detail of the code, or chip
                            in yourself! Forem is available for anyone
                            interested in creating similar communities in any
                            niche or passion. We believe in transparency and
                            adding value to the ecosystem. We hope you enjoy
                            poking around and participating!
                        </Card.Text>
                    </Card.Body>
                    <Card.Title className="w-75 m-auto">Leadership</Card.Title>
                    <Card.Img
                        variant="top"
                        src="https://via.placeholder.com/600x200.png"
                    />
                    <Card.Body className="w-75 m-auto">
                        <Card.Text>
                            DEV is led by Forem's co-founders Ben Halpern, Jess
                            Lee, and Peter Frank ("PB&J").
                        </Card.Text>
                    </Card.Body>
                    <Card.Title className="w-75 m-auto">Team</Card.Title>
                    <Card.Img
                        variant="top"
                        src="https://via.placeholder.com/600x200.png"
                    />
                    <Card.Body className="w-75 m-auto">
                        <Card.Text>
                            Our team is distributed around the world. We have no
                            office, but we come together online each day to
                            build community and improve the software careers of
                            millions. Happy coding ❤️
                        </Card.Text>
                    </Card.Body>
                </CardGroup>
            </Card>
        </Container>
    );
};

export default About;