import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/CRELogin.css'

const CRELogin = () => {
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here if needed
    navigate('/performance')
  }

  return (
    <div className="cre-login-root">
      <div className="cre-login-header">
        <span>Aaro7 AutoBuddy</span>
      </div>
      <div className="cre-login-content">
        <form className="cre-login-form" onSubmit={handleSubmit}>
          <h2 className="cre-login-title">CRE Agent Login</h2>
          
          <div className="cre-input-group">
            <label className="cre-input-label">CRE Login ID</label>
            <input
              className="cre-input-field"
              type="text"
              placeholder="CRE login"
              value={loginId}
              onChange={e => setLoginId(e.target.value)}
            />
          </div>

          <div className="cre-input-group">
            <label className="cre-input-label">Password</label>
            <input
              className="cre-input-field"
              type="password"
              placeholder="enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button className="cre-login-btn" type="submit">
            Log in
          </button>
          
          <button className="cre-forgot-password" type="button">
            Forgot password?
          </button>
        </form>
      </div>
    </div>
  )
}

export default CRELogin
