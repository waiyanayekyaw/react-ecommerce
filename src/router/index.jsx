import App from "../App.jsx";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop.jsx";
import ShopCategory from "../pages/ShopCategory.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import Cart from "../pages/Cart.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Order from "../pages/Order.jsx";
import Dashboard from "../admin/Dashboard.jsx";
import men_banner from "../assets/banner_mens.png";
import women_banner from "../assets/banner_women.png";
import kids_banner from "../assets/banner_kids.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

export default function index() {
    let { authReady, user } = useContext(AuthContext);
    const isAuthenticated = !!user;

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: isAuthenticated ? <Shop /> : <Navigate to={"/login"} />,
                },
                {
                    path: "/men",
                    element: isAuthenticated ? (
                        <ShopCategory banner={men_banner} category="men" />
                    ) : (
                        <Navigate to={"/login"} />
                    ),
                },
                {
                    path: "/women",
                    element: isAuthenticated ? (
                        <ShopCategory banner={women_banner} category="women" />
                    ) : (
                        <Navigate to={"/login"} />
                    ),
                },
                {
                    path: "/kids",
                    element: isAuthenticated ? (
                        <ShopCategory banner={kids_banner} category="kid" />
                    ) : (
                        <Navigate to={"/login"} />
                    ),
                },
                {
                    path: "/product/:productId",
                    element: isAuthenticated ? <ProductDetail /> : <Navigate to={"/login"} />,
                },
                {
                    path: "/cart",
                    element: isAuthenticated ? <Cart /> : <Navigate to={"/login"} />,
                },
                {
                    path: "/login",
                    element: !isAuthenticated ? <Login /> : <Navigate to={"/"} />,
                },
                {
                    path: "/signup",
                    element: !isAuthenticated ? <Signup /> : <Navigate to={"/"} />,
                },
                {
                    path: "/order",
                    element: isAuthenticated ? <Order /> : <Navigate to={"/login"} />,
                },
                {
                    path: "/admin",
                    element: isAuthenticated ? <Dashboard /> : <Navigate to={"/login"} />,
                },
            ],
        },
    ]);

    return authReady && <RouterProvider router={router} />;
}
