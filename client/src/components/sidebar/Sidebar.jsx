import Nav from "react-bootstrap/Nav";
import ClickToAction from "./clickToAction/ClickToAction";
import Categories from "./categories/Categories";
import Advertisement from "./advertisement/Advertisement";

const Sidebar = () => {
    return (
        <Nav className="flex-column p-2 text-start">
            <ClickToAction />
            <Categories />
            <Advertisement />
        </Nav>
    );
};

export default Sidebar;
