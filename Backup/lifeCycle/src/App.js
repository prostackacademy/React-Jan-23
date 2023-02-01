import React from 'react'
import Home from './components/Home'
import Digital from './components/Digital'
import Contact from './components/Contact'
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
              <li className="nav-list"><Link className="nav-link" to="/digital">Digital Clock</Link></li>
              <li className="nav-list"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/digital" component={Digital} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>

    </div>
  )
}

export default App
