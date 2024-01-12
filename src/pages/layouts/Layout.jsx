import React, { useContext } from "react";
import "./Layout.css";
import { useState } from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart_icon.png";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { ShopContext } from "../../contexts/ShopContext";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function Layout() {
    const { state } = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");
    let navigate = useNavigate();
    let location = useLocation();

    return (
        <>
            <div className="navbar">
                <div
                    onClick={() => {
                        navigate("/");
                    }}
                    className="nav-logo"
                >
                    <img src={logo} alt="" />
                    <h1>Shopping</h1>
                </div>
                <ul className="nav-list">
                    <li
                        onClick={() => {
                            navigate("/");
                            setMenu("shop");
                        }}
                    >
                        Shop {menu == "shop" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            navigate("/men");
                            setMenu("men");
                        }}
                    >
                        Men {menu == "men" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            navigate("/women");
                            setMenu("women");
                        }}
                    >
                        Women {menu == "women" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            navigate("/kids");
                            setMenu("kid");
                        }}
                    >
                        Kids {menu == "kid" ? <hr /> : <></>}
                    </li>
                </ul>

                <div className="nav-button">
                    <button
                        onClick={() => {
                            navigate("/login");
                        }}
                        className="login-btn"
                    >
                        Login
                    </button>

                    <img
                        onClick={() => {
                            navigate("/cart");
                        }}
                        src={cart}
                        alt=""
                        width={30}
                    />
                    <div className="nav-cart-count">{state.cartItems.length}</div>
                </div>
            </div>

            <SwitchTransition>
                <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
                    <Outlet />
                </CSSTransition>
            </SwitchTransition>

            <Footer />
        </>
    );
}
