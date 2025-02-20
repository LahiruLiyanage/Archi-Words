import NavBar from "./NavBar.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}