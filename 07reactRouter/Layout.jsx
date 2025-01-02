import React from 'react'
import Header from "./src/header/Header.jsx";
import {Outlet} from "react-router-dom";
import Home from "./src/home/Home.jsx";
import Footer from "./src/footer/Footer.jsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>

    )
}
export default Layout
