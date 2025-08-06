import React, { useState } from 'react'
import '../styles/LeadAllocation.css'

const LeadAllocation = () => {
  const [selectedCRE, setSelectedCRE] = useState('')
  const [leadsToAllocate, setLeadsToAllocate] = useState('')

  const allocationHistory = [
    { date: '25 Nov 2023', creName: 'Nidhi Kumari', region: 'North', leadsAllocated: '120' },
    { date: '24 Nov 2023', creName: 'Monica', region: 'North', leadsAllocated: '80' },
    { date: '24 Nov 2023', creName: 'Gayathri.K', region: 'South', leadsAllocated: '200' },
    { date: '23 Nov 2023', creName: 'Sirisha', region: 'East', leadsAllocated: '150' }
  ]

  const handleAllocate = () => {
    if (selectedCRE && leadsToAllocate) {
      alert(`Allocated ${leadsToAllocate} leads to ${selectedCRE}`)
      setLeadsToAllocate('')
    }
  }

  return (
    <div className="lead-allocation-page">
      <div className="allocation-header">
        <h1 className="page-title">Lead Allocation</h1>
      </div>

      <div className="leads-available-row">
        <div className="leads-available-card">
          <div className="card-label">Leads Available</div>
          <div className="card-value">3000</div>
        </div>
      </div>

      <div className="allocation-form-row">
        <div className="form-fields" style={{ alignItems: 'flex-start' }}>
          <div className="form-section">
            <label className="form-label">CRE</label>
            <div className="dropdown">
              <span>Select CRE Name</span>
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.0306 13.9694C11.1715 14.1101 11.2506 14.3009 11.2506 14.5C11.2506 14.6991 11.1715 14.8899 11.0306 15.0306L6.53063 19.5306C6.38995 19.6715 6.19906 19.7506 6 19.7506C5.80094 19.7506 5.61005 19.6715 5.46937 19.5306L0.969375 15.0306C0.676319 14.7376 0.676319 14.2624 0.969375 13.9694C1.26243 13.6763 1.73757 13.6763 2.03063 13.9694L6 17.9397L9.96937 13.9694C10.1101 13.8285 10.3009 13.7494 10.5 13.7494C10.6991 13.7494 10.8899 13.8285 11.0306 13.9694ZM2.03063 6.03063L6 2.06031L9.96937 6.03063C10.2624 6.32368 10.7376 6.32368 11.0306 6.03063C11.3237 5.73757 11.3237 5.26243 11.0306 4.96938L6.53063 0.469375C6.38995 0.328542 6.19906 0.24941 6 0.24941C5.80094 0.24941 5.61005 0.328542 5.46937 0.469375L0.969375 4.96938C0.676319 5.26243 0.676319 5.73757 0.969375 6.03063C1.26243 6.32368 1.73757 6.32368 2.03063 6.03063Z" fill="#8FABCC"/>
              </svg>
            </div>
          </div>
          <div className="form-section-row">
            <div className="form-section" style={{ marginBottom: 0 }}>
              <label className="form-label">Leads to Allocate</label>
              <input
                type="text"
                className="input-field"
                placeholder="Type here"
                value={leadsToAllocate}
                onChange={(e) => setLeadsToAllocate(e.target.value)}
              />
            </div>
            <button className="allocate-button" onClick={handleAllocate}>
              Allocate
            </button>
          </div>
        </div>
      </div>

      <div className="allocation-history-section">
        <h2 className="section-title">Allocation History</h2>
        <div className="history-table-container">
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>CRE Name</th>
                <th>Region</th>
                <th>Leads Allocated</th>
              </tr>
            </thead>
            <tbody>
              {allocationHistory.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.creName}</td>
                  <td>{row.region}</td>
                  <td>{row.leadsAllocated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button className="pagination-button">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.1479 14.2273C12.3677 14.4471 12.3677 14.8035 12.1479 15.0233C11.9281 15.2431 11.5718 15.2431 11.352 15.0233L5.72699 9.39828C5.62136 9.29277 5.56201 9.14961 5.56201 9.00031C5.56201 8.85102 5.62136 8.70785 5.72699 8.60234L11.352 2.97734C11.5718 2.75755 11.9281 2.75755 12.1479 2.97734C12.3677 3.19714 12.3677 3.55349 12.1479 3.77328L6.92019 9.00031L12.1479 14.2273Z" fill="white" stroke="white"/>
            </svg>
          </button>
          <button className="pagination-button active">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button">3</button>
          <button className="pagination-button">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.773 9.39797L7.14797 15.023C6.92818 15.2428 6.57182 15.2428 6.35203 15.023C6.13224 14.8032 6.13224 14.4468 6.35203 14.227L11.5798 9L6.35203 3.77297C6.13224 3.55318 6.13224 3.19682 6.35203 2.97703C6.57182 2.75724 6.92818 2.75724 7.14797 2.97703L12.773 8.60203C12.8786 8.70754 12.9379 8.85071 12.9379 9C12.9379 9.14929 12.8786 9.29246 12.773 9.39797Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LeadAllocation
