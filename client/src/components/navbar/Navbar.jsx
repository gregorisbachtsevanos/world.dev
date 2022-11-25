import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";

const Navbar = () => {
    return (
        <Nav className="row p-2">
            <Nav.Item className="col-2">
                <Link to="/">logo</Link>
            </Nav.Item>
            <div className="col-10 d-flex justify-content-end align-items-center">
                <Nav.Item className="">
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