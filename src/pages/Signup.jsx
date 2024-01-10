import React from "react";
import "./styles/Signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    return (
        <div className="signup">
            <div className="signup-container">
                <h1>Sign Up</h1>
                <div className="signup-forms">
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
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
