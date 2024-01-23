import React, { useState } from "react";
import "./styles/Signup.css";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { error, loading, signup } = useSignup();

    const signupUser = async (e) => {
        e.preventDefault();
        await signup(username, email, password);
    };

    return (
        <div className="signup">
            {loading && <p className="text-center my-3">Loading...</p>}
            <div className="signup-container">
                <h1>Sign Up</h1>
                <form className="signup-forms" onSubmit={signupUser}>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Enter Your Name"
                    />
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

                <p className="signup-login">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/Login")}>Login here</span>
                </p>
                <div className="signup-agree">
                    <input type="checkbox" />
                    <p>I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
}
