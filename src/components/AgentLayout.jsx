import React from 'react'
import AgentSidebar from './AgentSidebar'
import AgentHeader from './AgentHeader'

const AgentLayout = ({ children }) => {
  return (
    <div className="main-container">
      <AgentHeader />
      <div className="content-wrapper">
        <AgentSidebar />
        <main className="page-container">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AgentLayout
