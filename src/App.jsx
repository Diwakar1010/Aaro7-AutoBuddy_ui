import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AgentLayout from './components/AgentLayout'
import Performance from './pages/Performance'
import AgentPerformance from './pages/AgentPerformance'
import AgentEarnings from './pages/AgentEarnings'
import CREPerformance from './pages/CREPerformance'
import LeadAllocation from './pages/LeadAllocation'
import Approvals from './pages/Approvals'
import ApprovalsDetail from './pages/ApprovalsDetail'
import ManagerLogin from './pages/ManagerLogin'
import LoginSelection from './pages/LoginSelection'
import CRELogin from './pages/CRELogin'
import MainDashboard from './pages/MainDashboard'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<MainDashboard />} />
        <Route path="/manager-login" element={<ManagerLogin />} />
        <Route path="/cre-login" element={<CRELogin />} />
        <Route path="/login-select" element={<LoginSelection />} />

        {/* Agent routes */}
        <Route path="/agent/*" element={
          <AgentLayout>
            <Routes>
              <Route path="/performance" element={<AgentPerformance />} />
              <Route path="/earnings" element={<AgentEarnings />} />
            </Routes>
          </AgentLayout>
        } />

        {/* Manager routes */}
        <Route path="/manager/*" element={
          <Layout>
            <Routes>
              <Route path="/performance" element={<Performance />} />
              <Route path="/cre-performance" element={<CREPerformance />} />
              <Route path="/lead-allocation" element={<LeadAllocation />} />
              <Route path="/approvals" element={<Approvals />} />
              <Route path="/approvals/detail" element={<ApprovalsDetail />} />
            </Routes>
          </Layout>
        } />
       
      </Routes>
    </Router>
  )
}

export default App
