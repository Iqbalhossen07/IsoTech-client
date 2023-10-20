import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {

    return (
        <div className="w-11/12 mx-auto " style={{ overflowX: 'hidden', overflowY: 'hidden' }} >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="mt-20">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;