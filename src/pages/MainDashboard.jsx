import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/MainDashboard.css'

const MainDashboard = () => {
  const navigate = useNavigate()

  const handleServiceReminder = () => {
    // Navigate to service reminder module or implement functionality
    console.log('Service Reminder Module clicked')
  }

  const handleInsuranceRenewal = () => {
    // Navigate to insurance renewal module or implement functionality
    console.log('Insurance Renewal Module clicked')
    navigate('/login-select') 
  }

  return (
    <div className="main-dashboard-root">
      <div className="main-dashboard-header">
        <span>Aaro7 AutoBuddy</span>
      </div>
      <div className="main-dashboard-content">
        <div className="main-dashboard-modules">
          <button 
            className="module-btn"
            onClick={handleServiceReminder}
          >
            Service Reminder Module
          </button>
          <button 
            className="module-btn"
            onClick={handleInsuranceRenewal}
          >
            Insurance Renewal Module
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainDashboard
