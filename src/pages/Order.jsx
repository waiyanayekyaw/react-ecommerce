import React from "react";
import "./styles/Order.css";
import TotalAmount from "../components/TotalAmount";
import { useLocation } from "react-router-dom";

export default function Order() {
    const location = useLocation();
    const totalAmount = location.state.totalAmount;

    return (
        <div className="order">
            <div>
                <TotalAmount totalAmount={totalAmount} />
            </div>

            <div className="order-right">
                <h2>User Information</h2>
                <form action="">
                    <div>
                        <label htmlFor="">User Name</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>

                    <div>
                        <label htmlFor="">Phone Number</label>
                        <input type="number" />
                    </div>

                    <div>
                        <label htmlFor="">Address</label>
                        <textarea name="" id="" cols="50" rows="3"></textarea>
                    </div>

                    <button>Place Order</button>
                </form>
            </div>
        </div>
    );
}
