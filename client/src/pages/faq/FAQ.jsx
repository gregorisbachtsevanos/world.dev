import { Card, Container } from "react-bootstrap";
import Footer from "../../components/footer/Footer.jsx";

const FAQ = () => {
    return (
        <>
            <Container>
                <Card className="my-2 text-start">
                    <h4>FAQ</h4>
                    <Card.Title className="w-75 m-auto"></Card.Title>
                    <Card.Body className="w-75 m-auto">
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam nemo doloremque quae eum adipisci
                            neque labore voluptates porro, animi at explicabo ab
                            dolor laudantium odit nisi iure? Tempora,
                            exercitationem optio? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Maxime earum,
                            consectetur eius obcaecati ratione nobis porro
                            doloremque deleniti, id odit mollitia sint neque
                            architecto natus incidunt ipsam sit perferendis
                            itaque.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </>
    );
};

export default FAQ;
