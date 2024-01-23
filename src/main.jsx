import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ShopContextProvider from "./contexts/ShopContext";
import AuthContextProvider from "./contexts/AuthContext";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
        <ShopContextProvider>
            <Router />
        </ShopContextProvider>
    </AuthContextProvider>
);
