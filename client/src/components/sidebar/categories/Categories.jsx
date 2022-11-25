import { Link } from "react-router-dom";

const categories = [
    { icon: "", name: "Home" },
    { icon: "", name: "Listing" },
    { icon: "", name: "FAQ" },
    { icon: "", name: "Sponsors" },
    { icon: "", name: "About" },
    { icon: "", name: "Contact" },
    { icon: "", name: "Guides" },
    { icon: "", name: "Privacy Policy" },
];

const Categories = () => {
    return (
        <>
            {categories.map((category) => (
                <Link key={category.name} to={category.name}>
                    {category.name}
                </Link>
            ))}
        </>
    );
};

export default Categories;
