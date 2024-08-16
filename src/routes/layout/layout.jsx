import "./layout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./../../components/navbar/Navbar";

function LayOut() {
    return (
        <div className="listPage">
            <div className="layout">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LayOut;
