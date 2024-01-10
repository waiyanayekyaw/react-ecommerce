import React from "react";
import "./styles/LoginSignup.css";

export default function LoginSignup() {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-forms">
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an account? <span>Login here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" />
                    <p>I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
}
