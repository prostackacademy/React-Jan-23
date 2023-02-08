import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">Product API</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"> <Link to="/products" className="nav-link">Products</Link> </li>
                <li className="nav-list" ><Link to="/Admin" className="nav-link">Admin</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar
