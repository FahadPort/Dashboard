import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
const Broadroutes = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default Broadroutes
