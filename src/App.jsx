import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Performance from './pages/Performance'
import CREPerformance from './pages/CREPerformance'
import LeadAllocation from './pages/LeadAllocation'
import Approvals from './pages/Approvals'
import ApprovalsDetail from './pages/ApprovalsDetail'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Performance />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/cre-performance" element={<CREPerformance />} />
          <Route path="/lead-allocation" element={<LeadAllocation />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/approvals/detail" element={<ApprovalsDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
