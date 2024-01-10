import React from "react";
import "./styles/Subscribe.css";

export default function Subscribe() {
    return (
        <div className="subscribe">
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder="Enter Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
}
