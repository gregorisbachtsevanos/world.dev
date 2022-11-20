import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastnames] = useState("");
    const navigate = useNavigate();

    const hanldeSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={hanldeSubmit}>
            <div className="mb-3">
                <label className="form-label">
                    <span>Firstname</span>
                    <input
                        type="text-control"
                        className="form-control"
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                        name="firstname"
                    />
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label">
                    <span>Lastname</span>
                    <input
                        type="text-control"
                        className="form-control"
                        onChange={(e) => setLastname(e.target.value)}
                        required
                        name="lastname"
                    />
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label">
                    <span>Username</span>
                    <input
                        type="text-control"
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        name="username"
                    />
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label">
                    <span>Password</span>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        name="password"
                    />
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default Register;
