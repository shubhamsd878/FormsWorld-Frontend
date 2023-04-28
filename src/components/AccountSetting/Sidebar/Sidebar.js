import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { FiSettings, FiUserCheck, FiLock } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="account-settings-container">
      <div className="account-settings-sidebar my-4 w-100">
        <ul>
          <li className=''>
            <Link to="/kyc">
              <FiUserCheck />
              <span>KYC</span>
            </Link>
          </li>
          <li className='my-4'>
            <Link to="/password-settings">
              <FiLock />
              <span>Password Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="account-settings-content">
        {/* content goes here */}
      </div>
    </div>
  );
}

export default Sidebar;
