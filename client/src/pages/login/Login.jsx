import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const hanldeSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        
        if (res.status !== 200) {
            return console.log(res.status)
        }
        
        navigate('/')
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

export default Login;
