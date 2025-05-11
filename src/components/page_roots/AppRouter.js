import React from "react"

// import HickmanPage from "./HickmanPage/HickmanPage"
// import McuRankPage from "./McuRankPage/McuRankPage"
// import ComicsPage from "./ComicsPage/ComicsPage"
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
        <Route path="admin" element={<AdminPage />} />
        <Route path="comics" element={<AdminPage />} />
        <Route path="/comics" element={<AdminPage />} />
        <Route path="/" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}