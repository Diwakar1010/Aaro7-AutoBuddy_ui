import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Performance from './pages/Performance'
import CREPerformance from './pages/CREPerformance'
import LeadAllocation from './pages/LeadAllocation'
import Approvals from './pages/Approvals'
import ApprovalsDetail from './pages/ApprovalsDetail'
import ManagerLogin from './pages/ManagerLogin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ManagerLogin />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/performance" element={<Performance />} />
                <Route path="/cre-performance" element={<CREPerformance />} />
                <Route path="/lead-allocation" element={<LeadAllocation />} />
                <Route path="/approvals" element={<Approvals />} />
                <Route path="/approvals/detail" element={<ApprovalsDetail />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
