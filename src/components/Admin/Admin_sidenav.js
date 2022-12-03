import React from 'react'
import {Link} from 'react-router-dom'

const Admin_sidenav = () => {

        let sidebar = document.querySelector(".sidebar");
        let closeBtn = document.querySelector("#btn");
        let searchBtn = document.querySelector(".bx-search");
    
    
        const closeBtn_listener = () => {
            document.querySelector(".sidebar").classList.toggle("open");
            document.querySelector('#admin-nav-list').classList.toggle('admin-nav-list')
            menuBtnChange(); //calling the function(optional)
        }
    
    
        // following are the code to change sidebar button(optional)
        function menuBtnChange() {
            if (document.querySelector(".sidebar").classList.contains("open")) {
                document.querySelector("#btn").classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
            } else {
                document.querySelector("#btn").classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
            }
        }
  return (
    <div>
        <div className="sidebar">
                            <div className="logo-details">
                                <i className='bx bxl-c-plus-plus icon'></i>
                                <div className="logo_name">FormsWorld</div>
                                <i className='bx bx-menu' id="btn" onClick={closeBtn_listener}></i>
                            </div>
                            <ul className="nav-list" style={{ paddingLeft: '0' }} >
                                <li className='admin_sidenav'>
                                    <i className='bx bx-search' ></i>
                                    <input type="text" placeholder="Search..." />
                                    <span className="tooltip">Search</span>
                                </li>

                                <li className='admin_sidenav'>
                                    <Link to="/admin">
                                        <i className='bx bx-grid-alt'></i>
                                        <span className="links_name">Dashboard</span>
                                    </Link>
                                    <span className="tooltip">Dashboard</span>
                                </li>

                                <li className='admin_sidenav'>
                                    <Link to="/admin/activeForms">
                                        <i className='bx bx-user' ></i>
                                        <span className="links_name">Active Forms</span>
                                    </Link>
                                    <span className="tooltip">Active Forms</span>
                                </li>

                                <li className='admin_sidenav'>
                                    <Link to="/admin/orders">
                                        <i className='bx bx-chat' ></i>
                                        <span className="links_name">Ordres</span>
                                    </Link>
                                    <span className="tooltip">Orders</span>
                                </li>

                                <li className='admin_sidenav'>
                                    <Link to="/admin/users">
                                        <i className='bx bx-pie-chart-alt-2' ></i>
                                        <span className="links_name">Users</span>
                                    </Link>
                                    <span className="tooltip">Users</span>
                                </li>

                                <li className='admin_sidenav'>
                                    <Link to="#">
                                        <i className='bx bx-folder' ></i>
                                        <span className="links_name">File Manager</span>
                                    </Link>
                                    <span className="tooltip">Files</span>
                                </li>

                                <li className='admin_sidenav'>
                                    <Link to="#">
                                        <i className='bx bx-cart-alt' ></i>
                                        <span className="links_name">Order</span>
                                    </Link>
                                    <span className="tooltip">Order</span>
                                </li>

                                <li className='admin_sidenav'>
                                    <Link to="#">
                                        <i className='bx bx-heart' ></i>
                                        <span className="links_name">Saved</span>
                                    </Link>
                                    <span className="tooltip">Saved</span>
                                </li>

                                <li className='admin_sidenav'>
                                    <Link to="#">
                                        <i className='bx bx-cog' ></i>
                                        <span className="links_name">Setting</span>
                                    </Link>
                                    <span className="tooltip">Setting</span>
                                </li>

                                <li className="profile">
                                    <div className="profile-details">
                                        {/* <img src="profile.jpg" alt="profileImg"> */}
                                        <div className="name_job">
                                            <div className="name">Shubham Dahiya</div>
                                            <div className="job">Web designer</div>
                                        </div>
                                    </div>
                                    <i className='bx bx-log-out' id="log_out" ></i>
                                </li>
                            </ul>
                        </div>

                        {/* In the section code for target pages */}
                        {/* <section className="home-section">
                            <div className="text">Dashboard</div>
                        </section> */}

    </div>
  )
}

export default Admin_sidenav