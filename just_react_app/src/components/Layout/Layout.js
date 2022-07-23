import React,{ Fragment } from "react";
import {Outlet} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Layout.css';



const Layout =()=>{
    return (
        <Fragment>
        <Navigation/>
        <main className="layoutContent">
            <Outlet/>
        </main>
        </Fragment>

    )
}

export default Layout;
