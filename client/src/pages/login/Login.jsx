import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const hanldeSubmit = async (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <form onSubmit={hanldeSubmit}>
            <div className="mb-3">
                <label className="form-label">
                    <span>Username</span>
                    <input
                        type="text-control"
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        name="firstname"
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

export default Login;
