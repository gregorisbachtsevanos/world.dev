import Nav from "react-bootstrap/Nav";
import ClickToAction from "../clickToAction/ClickToAction";

const Sidebar = () => {
    return (
        <Nav className="flex-column p-2 text-start">
            <ClickToAction />
            <Nav.Link>sidebat</Nav.Link>
            <Nav.Link>sidebat</Nav.Link>
            <Nav.Link>sidebat</Nav.Link>
        </Nav>
    );
};

export default Sidebar;
