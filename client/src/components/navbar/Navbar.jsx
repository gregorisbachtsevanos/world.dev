import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Nav className="row p-2">
            <Nav.Item className="col-2">
                <Link>logo</Link>
            </Nav.Item>
            <div className="col-10 d-flex justify-content-end">
                <Nav.Item className="p-2 m-a">
                    <Link to="/login">Login</Link>
                </Nav.Item>
                <Button variant="outline-primary">
                    <Link to="/register">Create account</Link>
                </Button>
            </div>
        </Nav>
    );
};

export default Navbar;
