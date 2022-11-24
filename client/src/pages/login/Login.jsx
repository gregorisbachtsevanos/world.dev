import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const hanldeSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status !== 200) {
            return console.log(res.status);
        }

        navigate("/");
    };

    return (
        <Form onSubmit={hanldeSubmit}>
            <Form.Group className="mb-3">
                <Form.Label className="form-label">
                    <span>Username</span>
                    <Form.Control
                        type="text-control"
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        name="username"
                    />
                </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="form-label">
                    <span>Password</span>
                    <Form.Control
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        name="password"
                    />
                </Form.Label>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default Login;
