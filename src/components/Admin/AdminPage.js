import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import './AdminPage.css'
import Admin_sidenav from './Admin_sidenav';
import ActiveForms from './NestedRoutes/ActiveForms';
import Orders from './NestedRoutes/Orders';
import Users from './NestedRoutes/Users';


const AdminPage = () => {

    return (
        <>
            <Admin_sidenav />

            <section className="home-section">
            <Routes>
                <Route index element={<ActiveForms />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/users' element={<Users />} />
            </Routes>
            </section>



            {/* In the section code for target pages */}
            {/* <section className="home-section">
                <div className="text">Dashboard</div>
            </section> */}
            
            
        </>
    )
}

export default AdminPage