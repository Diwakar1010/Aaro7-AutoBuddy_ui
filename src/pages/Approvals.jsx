import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Approvals.css'

const Approvals = () => {
  const approvalDates = [
    { date: 'Today', isToday: true },
    { date: '20/07/2024' },
    { date: '18/07/2024' },
    { date: '16/07/2024' },
    { date: '14/07/2024' },
    { date: '12/07/2024' },
    { date: '05/07/2024' },
    { date: '28/06/2024' },
    { date: '20/06/2024' }
  ]

  return (
    <div className="approvals-page">
      <div className="approvals-header">
        <h1 className="page-title">Approvals</h1>
      </div>

      <div className="approvals-list">
        {approvalDates.map((item, index) => (
          <Link
            key={index}
            to={item.isToday ? "/approvals/detail" : "#"}
            className={`approval-item ${item.isToday ? 'today' : ''}`}
          >
            <div className="approval-date">{item.date}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Approvals
