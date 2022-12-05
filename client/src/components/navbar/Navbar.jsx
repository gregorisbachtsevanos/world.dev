import { Link, useNavigate } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = ({ user }) => {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

    const changeTheme = async () => {
        let theme = localStorage.getItem("theme") === "true" ? "light" : "dark";
        localStorage.setItem(
            "theme",
            localStorage.getItem("theme") === "true" ? "false" : "true"
        );
        dispatch({ type: "THEME", payload: theme });

        const res = await fetch("http://localhost:3001/change-theme", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user, theme }),
        });
    };

    return (
        <Nav className="row py-4">
            <Nav.Item className="col-2 text-start">
                <Link to="/">logo</Link>
            </Nav.Item>
            <div className="col-10 d-flex justify-content-end align-items-center">
                <Button
                    variant="link"
                    className="text-decoration-none"
                    onClick={changeTheme}
                >
                    theme
                </Button>
                {!user ? (
                    <>
                        <Nav.Item className="">
                            <Link to="/login">Login</Link>
                        </Nav.Item>
                        <Button variant="outline-primary">
                            <Link to="/register">Create account</Link>
                        </Button>
                    </>
                ) : (
                    <>
                        <Button variant="link" className="text-decoration-none">
                            <Link to={`/${user.username}`}>Profile</Link>
                        </Button>
                        <Button
                            variant="link"
                            className="text-decoration-none"
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </>
                )}
            </div>
        </Nav>
    );
};

export default Navbar;
