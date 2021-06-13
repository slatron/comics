import React from "react"

import McuRankPage from "./McuRankPage/McuRankPage"
import ComicsPage from "./ComicsPage/ComicsPage"
import LifetrackerPage from "./LifetrackerPage/LifetrackerPage"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lifetracker">
          <LifetrackerPage />
        </Route>
        <Route path="/mcu-rank">
          <McuRankPage />
        </Route>
        <Route path="/">
          <ComicsPage />
        </Route>
      </Switch>
    </Router>
  )
}