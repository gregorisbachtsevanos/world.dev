import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const categories = [
    { icon: "", name: "Home", value: "/" },
    { icon: "", name: "Listing", value: "listing" },
    { icon: "", name: "FAQ", value: "faq" },
    { icon: "", name: "Sponsors", value: "Sponsorship" },
    { icon: "", name: "About", value: "about" },
    { icon: "", name: "Contact", value: "contact" },
    { icon: "", name: "Guides", value: "guides" },
    { icon: "", name: "Privacy Policy", value: "privacy" },
];

const Categories = () => {
    return (
        <>
            {categories.map((category) => (
                <Button
                    key={category.name}
                    variant="link text-start text-decoration-none"
                >
                    <Link className="text-decoration-none" to={category.value}>
                        {category.name}
                    </Link>
                </Button>
            ))}
        </>
    );
};

export default Categories;
