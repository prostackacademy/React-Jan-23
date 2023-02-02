import React from 'react'
import Home from './components/Home'
import User from './components/User'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="#" className="navbar-brand">Life Cycle Methods</Link>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-list"><Link className="nav-link" to="/home">Home</Link></li>
              <li className="nav-list"><Link className="nav-link" to="/user">User</Link></li>

            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />

        </Switch>
      </Router>

    </div>
  )
}

export default App
