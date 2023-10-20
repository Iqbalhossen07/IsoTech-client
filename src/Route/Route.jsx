import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCarts/MyCarts";
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import ProductDetailUpdate from "../Pages/ProductDetailUpdate/ProductDetailUpdate";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: "/productDetailUpdate/:id",
                element: <PrivateRoute><ProductDetailUpdate></ProductDetailUpdate></PrivateRoute>,
                loader: ({params})=>fetch(`https://assignment-10-c1bce5d0c-iqbal-hossens-projects.vercel.app/products/${params.id}`)
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                
                loader: ()=> fetch('https://assignment-10-c1bce5d0c-iqbal-hossens-projects.vercel.app/products1')

            },
            {
                path: "/products/:brandName",
                element: <Products></Products>,
                loader: ()=> fetch(`https://assignment-10-c1bce5d0c-iqbal-hossens-projects.vercel.app/products`)
            },
            {
                path: "/productsDetails/:id",
                element: <PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://assignment-10-c1bce5d0c-iqbal-hossens-projects.vercel.app/products1/${params.id}`)
            },
           
        ]
    }
])

export default router;