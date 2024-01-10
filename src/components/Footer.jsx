import React from "react";
import "./styles/Footer.css";
import footer_logo from "../assets/logo_big.png";
import instagram from "../assets/instagram_icon.png";
import pintester from "../assets/pintester_icon.png";
import whatsapp from "../assets/whatsapp_icon.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <h1>SHOPPING</h1>
            </div>

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-icons">
                <div className="footer-icons-container">
                    <img src={instagram} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp} alt="" />
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    );
}
