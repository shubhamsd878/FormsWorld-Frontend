import React, { useState } from 'react'
import css from './Admin.css'
import AdminPage from './Admin/AdminPage'
import Auth from './Admin/Auth'
const Admin = () => {
    return(
        <>
        { !sessionStorage.adminAuth ?
            (<Auth/>) :
            (<AdminPage />)
        }
        </> 
    )
    
}

export default Admin