import Nav from "react-bootstrap/Nav";
import ClickToAction from "./clickToAction/ClickToAction";
import Categories from "./categories/Categories";
import Advertisement from "./advertisement/Advertisement";

const Sidebar = ({ user }) => {
    return (
        <Nav className="flex-column p-2 text-start">
            <ClickToAction user={user} />
            <Categories user={user} />
            <Advertisement user={user} />
        </Nav>
    );
};

export default Sidebar;
