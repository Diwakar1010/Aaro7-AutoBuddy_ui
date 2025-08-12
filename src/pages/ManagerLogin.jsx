import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ManagerLogin.css'

const ManagerLogin = () => {
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here if needed
    console.log("logged In ")
    navigate('/manager/performance')
  }

  return (
    <div className="manager-login-root">
      <div className="manager-login-header">
        <span>Aaro7 AutoBuddy</span>
      </div>
      <form className="manager-login-form" onSubmit={handleSubmit}>
        <h2 className="manager-login-title">Manager Login</h2>
        <div className="manager-login-label">Manager Login ID</div>
        <input
          className="manager-login-input"
          type="text"
          placeholder="manager id"
          value={loginId}
          onChange={e => setLoginId(e.target.value)}
        />
        <div className="manager-login-label">Password</div>
        <input
          className="manager-login-input"
          type="password"
          placeholder="enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="manager-login-btn" type="submit">
          Log in
        </button>
        <button className="manager-login-forgot" type="button">
          Forgot password?
        </button>
      </form>
    </div>
  )
}

export default ManagerLogin