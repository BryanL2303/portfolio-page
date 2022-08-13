import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import App from '../components/App'

ReactDOM.render(
  <Router>
  <Routes>
    <Route path="/" component={App}/>
  </Routes>
  </Router>,
  document.body.appendChild(document.createElement('div')),
)
