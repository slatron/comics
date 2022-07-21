import React from "react"

import McuRankPage from "./McuRankPage/McuRankPage"
import ComicsPage from "./ComicsPage/ComicsPage"
import LifetrackerPage from "./LifetrackerPage/LifetrackerPage"
import AdminPage from "./AdminPage/AdminPage"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="lifetracker" element={<LifetrackerPage />} />
        <Route path="mcu-rank" element={<McuRankPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="comics" element={<ComicsPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/" element={<ComicsPage />} />
      </Routes>
    </BrowserRouter>
  )
}