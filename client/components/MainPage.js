import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AllBooks from './AllBooks'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav />
        <main>
          <h1>WEBSITE NAME HERE</h1>
          <body>
            <AllBooks />
          </body>
        </main>
      </div>
    </Router>
  )
}

export default Routes
