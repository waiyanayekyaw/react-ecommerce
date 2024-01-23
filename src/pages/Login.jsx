import React, { useState } from "react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { error, loading, login } = useLogin();

    const loginUser = async (e) => {
        e.preventDefault();
        let user = await login(email, password);
    };

    return (
        <div className="login">
            {loading && <p className="text-center my-3">Loading...</p>}
            <div className="login-container">
                <h1>Login</h1>
                <form className="login-forms" onSubmit={loginUser}>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    {error && <p className="test-xs text-rose-600">{error}</p>}

                    <button type="submit">Continue</button>
                </form>

                <p className="login-login">
                    Don't already have an account?{" "}
                    <span onClick={() => navigate("/Signup")}>Signup here</span>
                </p>
                <div className="login-agree">
                    <input type="checkbox" />
                    <p>I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
}
