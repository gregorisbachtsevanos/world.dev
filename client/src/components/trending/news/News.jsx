import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const News = () => {
    return (
        <>
            <Card className="my-2 text-start">
                <Card.Title className="w-75 m-auto">
                    <Card.Text>MongoDB Atlas Hackathon 2022 (15)</Card.Text>
                </Card.Title>
                <Card.Body className="w-75 m-auto">
                    <Card.Text>
                        MongoDB 2022 Hackathon submission - Introducing Indian
                        dishes catalog MongoDB Atlas Hackathon 2022 on DEV
                    </Card.Text>
                    <div>
                        <Button className="w-100" variant="primary">
                            <Link to={"#"}>Share</Link>
                        </Button>
                    </div>
                    <div>
                        <Button className="w-100" variant="light">
                            <Link to={"#"}>See</Link>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default News;
