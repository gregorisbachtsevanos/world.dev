import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import  from "react-bootstrap/Button";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const hanldeSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="m-auto w-75">
            <Form className="my-5 mx-auto w-50 row" onSubmit={hanldeSubmit}>
                <Form.Group className="col-6">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control
                        type="text-control"
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                        name="firstname"
                    />
                </Form.Group>
                <Form.Group className="col-6">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control
                        type="text-control"
                        onChange={(e) => setLastname(e.target.value)}
                        required
                        name="lastname"
                    />
                </Form.Group>
                <Form.Group className="col-6">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text-control"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        name="username"
                    />
                </Form.Group>
                <Form.Group className="col-6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        name="email"
                    />
                </Form.Group>
                <Form.Group className="col-6">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        name="password"
                    />
                </Form.Group>
                <Form.Group className="col-6">
                    <Form.Label>Repeat your Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required
                        name="repeat_password"
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Button type="submit" variant="light">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Register;
