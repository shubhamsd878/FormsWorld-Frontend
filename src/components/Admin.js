import React, { useState } from 'react'
import css from './Admin.css'
import AdminPage from './Admin/AdminPage'
import Auth from './Admin/Auth'
const Admin = () => {
    return(
        <div className='text-dark'>
        { !sessionStorage.adminAuth ?
            (<Auth/>) :
            (<AdminPage />)
        }
        </div> 
    )
    
}

export default Admin