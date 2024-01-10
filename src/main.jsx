import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import ShopContextProvider from "./contexts/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ShopContextProvider>
        <RouterProvider router={router} />
    </ShopContextProvider>
);
