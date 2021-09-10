import React from 'react'

import Cytoscape from './Cytoscape'
import AddInterest from './AddInterest'

import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router>
    
    <div>
      <Route exact path="/" component={Cytoscape} />
      <Route path="/addInterest/:nodeId" component={AddInterest} />
    </div>
  </Router>
)

export default App
