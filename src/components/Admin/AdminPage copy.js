import React from 'react'
import './AdminPage.css'

const AdminPage = () => {
    let admin_sidebar = document.getElementById("admin_sidebar");
    let closeBtn = document.getElementById("btn") ;
    let searchBtn = document.querySelector(".bx-search");
  
    const menu_btn = () => {
        admin_sidebar = document.querySelector("#btn");
        admin_sidebar.classList.toggle("open");
        console.log('admin_sidebar class list: ' + admin_sidebar.classList)
        // menuBtnChange();//calling the function(optional)
    }

    // closeBtn.addEventListener("click", ()=>{
    //   admin_sidebar.classList.toggle("open");
    //   menuBtnChange();//calling the function(optional)
    // });
  
    // searchBtn.addEventListener("click", ()=>{ // admin_sidebar open when you click on the search iocn
    //   admin_sidebar.classList.toggle("open");
    //   menuBtnChange(); //calling the function(optional)
    // });
  
    // following are the code to change admin_sidebar button(optional)
    // function menuBtnChange() {
    //  if(admin_sidebar.classList.contains("open")){
    //    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    //  }else {
    //    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    //  }
    // }

    return (
        <div>
            <div className="admin_sidebar mkmk open" id='admin_sidebar'>
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus icon'></i>
                    <div className="logo_name">FormsWorld</div>
                    <i className='bx bx-menu' id="btn" onClick={menu_btn}   ></i>
                </div>
                <ul className="nav-list">
                    <li className='admin_sidenav'>
                        <i className='bx bx-search' ></i>
                        <input type="text" placeholder="Search..." />
                            <span className="tooltip">Search</span>
                    </li>
                    <li className='admin_sidenav'>
                        <a href="#">
                            <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Dashboard</span>
                        </a>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li className='admin_sidenav'>
                        <a href="#">
                            <i className='bx bx-user' ></i>
                            <span className="links_name">User</span>
                        </a>
                        <span className="tooltip">User</span>
                    </li>
                    <li className='admin_sidenav'>
                        <a href="#">
                            <i className='bx bx-chat' ></i>
                            <span className="links_name">Messages</span>
                        </a>
                        <span className="tooltip">Messages</span>
                    </li>
                    <li className='admin_sidenav'>
                        <a href="#">
                            <i className='bx bx-pie-chart-alt-2' ></i>
                            <span className="links_name">Analytics</span>
                        </a>
                        <span className="tooltip">Analytics</span>
                    </li>
                    <li className='admin_sidenav'>
                        <a href="#">
                            <i className='bx bx-folder' ></i>
                            <span className="links_name">File Manager</span>
                        </a>
                        <span className="tooltip">Files</span>
                    </li>
                    <li className='admin_sidenav'>
                        <a href="#">
                            <i className='bx bx-cart-alt' ></i>
                            <span className="links_name">Order</span>
                        </a>
                        <span className="tooltip">Order</span>
                    </li>
                    <li className='admin_sidenav'>
                        <a href="#">
                            <i className='bx bx-heart' ></i>
                            <span className="links_name">Saved</span>
                        </a>
                        <span className="tooltip">Saved</span>
                    </li>
                    <li className='admin_sidenav'>
                        <a href="#">
                            <i className='bx bx-cog' ></i>
                            <span className="links_name">Setting</span>
                        </a>
                        <span className="tooltip">Setting</span>
                    </li>
                    <li className="profile">
                        <div className="profile-details">
                            {/* <img src="profile.jpg" alt="profileImg"> */}
                                <div className="name_job">
                                    <div className="name">Prem Shahi</div>
                                    <div className="job">Web designer</div>
                                </div>
                        </div>
                        <i className='bx bx-log-out' id="log_out" ></i>
                    </li>
                </ul>
            </div>
            <section className="home-section">
                <div className="text">Dashboard</div>
            </section>
        </div>
    )

  
}

export default AdminPage