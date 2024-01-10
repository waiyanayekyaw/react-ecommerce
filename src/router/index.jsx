import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop.jsx";
import ShopCategory from "../pages/ShopCategory.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import Cart from "../pages/Cart.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import men_banner from "../assets/banner_mens.png";
import women_banner from "../assets/banner_women.png";
import kids_banner from "../assets/banner_kids.png";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Shop />,
            },
            {
                path: "/men",
                element: <ShopCategory banner={men_banner} category="men" />,
            },
            {
                path: "/women",
                element: <ShopCategory banner={women_banner} category="women" />,
            },
            {
                path: "/kids",
                element: <ShopCategory banner={kids_banner} category="kid" />,
            },
            {
                path: "/product/:productId",
                element: <ProductDetail />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);

export default router;
