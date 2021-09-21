import React from "react"

import McuRankPage from "./McuRankPage/McuRankPage"
import ComicsPage from "./ComicsPage/ComicsPage"
import RemRankPage from "./RemRankPage/RemRankPage"
import LifetrackerPage from "./LifetrackerPage/LifetrackerPage"
import AdminPage from "./AdminPage/AdminPage"

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom"

export default function App() {

  let path = localStorage.getItem('redirect-path') || null;
  if (path) {
    localStorage.removeItem('redirect-path');
    return <Redirect to={path} />
  }

  return (
    <Router>
      <Switch>
        <Route path="/lifetracker">
          <LifetrackerPage />
        </Route>
        <Route path="/mcu-rank">
          <McuRankPage />
        </Route>
        <Route path="/rem-rank">
          <RemRankPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/">
          <ComicsPage />
        </Route>
      </Switch>
    </Router>
  )
}