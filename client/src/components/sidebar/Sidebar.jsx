import Nav from "react-bootstrap/Nav";
import ClickToAction from "./clickToAction/ClickToAction";
import Categories from "./categories/Categories";

const Sidebar = () => {
    return (
        <Nav className="flex-column p-2 text-start">
            <ClickToAction />
            <Categories />
            <Nav.Link>sidebat</Nav.Link>
        </Nav>
    );
};

export default Sidebar;
