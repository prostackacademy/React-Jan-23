import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import UserApp from './UserApp/UserApp'

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/userApp" component={UserApp} />

          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
