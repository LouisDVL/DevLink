import React from 'react'

import Words from './Words'
import AddWord from './AddWord'
import Cytoscape from './Cytoscape'

import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Cytoscape} />
    </div>
  </Router>
)

export default App
