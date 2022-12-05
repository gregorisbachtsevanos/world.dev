import Nav from "react-bootstrap/Nav";
import Listing from "./listing/Listing";
import News from "./news/News";

const Trending = () => {
    return (
        <Nav className="flex-column p-5">
            <News />
            <Listing />
        </Nav>
    );
};

export default Trending;
