// libraries
import React from 'react';
import { Outlet } from 'react-router-dom';
// components
import Header from '../../components/header/header.component';


const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;