import React from "react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
                <div className="login-forms">
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
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
