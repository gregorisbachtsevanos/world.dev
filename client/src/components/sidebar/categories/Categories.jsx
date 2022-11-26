import { Link } from "react-router-dom";

const categories = [
    { icon: "", name: "Home", value: "/" },
    { icon: "", name: "Listing", value: "listing" },
    { icon: "", name: "FAQ", value: "fqa" },
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
                <Link key={category.name} to={category.value}>
                    {category.name}
                </Link>
            ))}
        </>
    );
};

export default Categories;
