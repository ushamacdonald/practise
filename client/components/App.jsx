import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Rats from './Rats'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Route exact path="/" component={Rats} />
    </div>
  </Router>
)

export default App
