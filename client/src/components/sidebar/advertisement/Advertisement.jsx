import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ads = [
    {
        image: "https://via.placeholder.com/600x300.png",
        title: "Calling all early-career developers & coding mentors!",
        description:
            "Join CodeNewbie Community: a supportive space for coding newbies to connect & express themselves.",
        action: "More...",
    },
    {
        image: "https://via.placeholder.com/600x300.png",
        title: "The Forem Shop!",
        action: "Coming soon",
    },
];

const Advertisement = () => {
    return (
        <>
            {ads.map((ad) => (
                <Card key={ad.title} className="my-2 text-start">
                    <Card.Img variant="top" src={ad.image} />
                    <Card.Title className="w-75 m-auto">
                        <Card.Text>{ad.title}</Card.Text>
                    </Card.Title>
                    <Card.Body className="w-75 m-auto">
                        {ad.description && (
                            <Card.Text>{ad.description}</Card.Text>
                        )}
                        <Button variant="link">
                            <Link to={"#"}>{ad.action}</Link>
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default Advertisement;
