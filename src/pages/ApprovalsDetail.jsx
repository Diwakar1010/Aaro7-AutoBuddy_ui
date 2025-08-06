import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ApprovalsDetail.css'

const ApprovalsDetail = () => {
  const [expandedItems, setExpandedItems] = useState({})

  const approvalRequests = [
    {
      id: 1,
      agent: 'Priya Kumari',
      title: 'Request from CRE Agent : Priya Kumari'
    },
    {
      id: 2,
      agent: 'Valli Raj',
      title: 'Request from CRE Agent : Valli Raj'
    }
  ]

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="approvals-detail-page">
      <div className="detail-header">
        <h1 className="page-title">Approvals</h1>
        <Link to="/approvals" className="back-button">
          &lt;&lt; Back
        </Link>
      </div>

      <div className="detail-content">
        <h2 className="section-title">Today</h2>
        
        <div className="requests-list">
          {approvalRequests.map((request) => (
            <div key={request.id} className="request-accordion">
              <div 
                className="accordion-header"
                onClick={() => toggleExpanded(request.id)}
              >
                <span className="request-title">{request.title}</span>
                <svg 
                  width="14" 
                  height="8" 
                  viewBox="0 0 14 8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`accordion-icon ${expandedItems[request.id] ? 'expanded' : ''}`}
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M13.6922 1.44219L7.44219 7.69219C7.32496 7.80955 7.16588 7.87549 7 7.87549C6.83412 7.87549 6.67504 7.80955 6.55781 7.69219L0.307812 1.44219C0.0635991 1.19797 0.0635991 0.802026 0.307812 0.557813C0.552026 0.313599 0.947974 0.313599 1.19219 0.557813L7 6.36641L12.8078 0.557813C13.052 0.313599 13.448 0.313599 13.6922 0.557813C13.9364 0.802026 13.9364 1.19797 13.6922 1.44219Z" 
                    fill="white"
                  />
                </svg>
              </div>
              
              {expandedItems[request.id] && (
                <div className="accordion-content">
                  <p>Request details for {request.agent} would be displayed here...</p>
                  <div className="action-buttons">
                    <button className="approve-btn">Approve</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ApprovalsDetail
