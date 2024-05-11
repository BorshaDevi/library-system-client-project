import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


const Root = () => {
    return (
        <div className="h-screen bg-cover bg-scroll  bg-[url(https://i.ibb.co/VBLVTnD/young-student-learning-library.jpg)]"   >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;