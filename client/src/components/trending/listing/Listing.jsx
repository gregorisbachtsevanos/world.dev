import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const listings = [
    {
        title: "The 7 Best Things About Migrate Website To WordPress",
        hastag: "product",
    },
    {
        title: "😓 Why do you ignore recruiter messages? (survey)",
        hastag: "misc",
    },
    {
        title: "Convert Website To Wordpress Theme",
        hastag: "product",
    },
    {
        title: "Unprecedented Black Friday deal: 75% OFF PREMIUM PROXIES",
        hastag: "products",
    },
    {
        title: "[Jan 24th] ⛄ Getting Started With Svelte (Stop Using React!) Workshop ⛄",
        hastag: "events",
    },
];

const Listing = () => {
    return (
        <>
            <Card className="my-2 text-start">
                <h4>Listings</h4>
                {listings.map((el) => (
                    <div>
                        <Card.Title className="w-75 m-auto">
                            <Link to={`listing/${el.hastag}/${el.title}`}>
                                {el.title}
                            </Link>
                        </Card.Title>
                        <Card.Body className="w-75 m-auto">
                            <Card.Text>{el.hastag}</Card.Text>
                        </Card.Body>
                    </div>
                ))}
            </Card>
        </>
    );
};

export default Listing;
