import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginSelection.css'

const LoginSelection = () => {
  const navigate = useNavigate()

  const handleManagerLogin = () => {
    navigate('/manager-login')
  }

  const handleCRELogin = () => {
    navigate('/cre-login')
  }

  return (
    <div className="login-selection-root">
      <div className="login-selection-header">
        <span>Aaro7 AutoBuddy</span>
      </div>
      <div className="login-selection-content">
        <div className="login-selection-buttons">
          <button 
            className="login-selection-btn"
            onClick={handleManagerLogin}
          >
            Manager Login
          </button>
          <button 
            className="login-selection-btn"
            onClick={handleCRELogin}
          >
            CRE Agent Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginSelection
