import React from "react";
import "./styles/CheckOut.css";
import TotalAmount from "./TotalAmount";

export default function CheckOut({ totalAmount }) {
    return (
        <div className="cart-checkout">
            <div></div>

            <div>
                <TotalAmount totalAmount={totalAmount} />
            </div>
        </div>
    );
}
