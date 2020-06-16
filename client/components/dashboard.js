import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title"> Dashboard </div>
      <Link to="/dashboard/profile/565bc49e-c0c7-4ad1-aeb8-fa02485d87f9"> </Link>
      <Link to="/dashboard/main"> Go To Main </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
