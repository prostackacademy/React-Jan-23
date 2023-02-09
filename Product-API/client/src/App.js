import React from 'react'
import Navbar from './Navbar/Navbar'
import Products from './Products/Products'
import Login from './HookEx/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/products" component={Products} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
