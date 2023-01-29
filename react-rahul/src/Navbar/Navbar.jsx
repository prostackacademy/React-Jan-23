import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="#" className="navbar-brand">React Routing Example</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list"><Link className="nav-link" to="/userApp">User App</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/home">Home</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/services">Service</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/contact">Contact</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/product">Product</Link></li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar
