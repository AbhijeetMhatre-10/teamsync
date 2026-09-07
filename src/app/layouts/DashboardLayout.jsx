import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      This is for navbar
      <Outlet/>
    </div>
  )
}

export default DashboardLayout