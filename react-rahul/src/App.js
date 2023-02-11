import React from 'react'
import Product from './Product/Product'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'
import User from './User/User'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                        <Link to="/" className="navbar-brand">Redux Example</Link>
                        <div className="ml-auto">
                            <ul className="navbar-nav">
                                <li className="nav-list"><Link className="nav-link" to="/user">User</Link></li>
                                <li className="nav-list"><Link className="nav-link" to="/product">Products</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route path="/product" component={Product} />
                        <Route path="/user" component={User} />
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
}

export default App
