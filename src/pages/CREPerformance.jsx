import React from 'react'
import '../styles/CREPerformance.css'

const CREPerformance = () => {
  const performanceData = [
    { sno: 1, name: 'Anusha', attempted: '115/120', contacted: '89/100', scheduled: '22/30', confirmation: '15/22' },
    { sno: 2, name: 'Sirisha', attempted: '109/120', contacted: '74/100', scheduled: '18/30', confirmation: '11/18' },
    { sno: 3, name: 'Suma', attempted: '96/120', contacted: '63/100', scheduled: '16/30', confirmation: '9/16' },
    { sno: 4, name: 'Divya', attempted: '87/120', contacted: '55/100', scheduled: '14/30', confirmation: '8/14' },
    { sno: 5, name: 'Monica', attempted: '79/120', contacted: '50/100', scheduled: '12/30', confirmation: '6/12' },
    { sno: 6, name: 'Nidhi Kumari', attempted: '72/120', contacted: '45/100', scheduled: '11/30', confirmation: '5/11' },
    { sno: 7, name: 'Priya', attempted: '65/120', contacted: '38/100', scheduled: '9/30', confirmation: '4/9' },
    { sno: 8, name: 'Bhavani P.', attempted: '98/120', contacted: '70/100', scheduled: '20/30', confirmation: '13/20' },
    { sno: 9, name: 'Gayathri K.', attempted: '60/120', contacted: '32/100', scheduled: '8/30', confirmation: '3/8' }
  ]

  const summaryData = [
    { label: 'Total Calls Attempted', value: '780' },
    { label: 'Contacts Made', value: '544' },
    { label: 'Appointments Scheduled', value: '102' },
    { label: 'Confirmations Done', value: '14' }
  ]

  return (
    <div className="cre-performance-page">
      <div className="cre-header">
        <div className="time-selector">
          <div className="dropdown">
            <span>This Week</span>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.0306 13.9694C11.1715 14.1101 11.2506 14.3009 11.2506 14.5C11.2506 14.6991 11.1715 14.8899 11.0306 15.0306L6.53063 19.5306C6.38995 19.6715 6.19906 19.7506 6 19.7506C5.80094 19.7506 5.61005 19.6715 5.46937 19.5306L0.969375 15.0306C0.676319 14.7376 0.676319 14.2624 0.969375 13.9694C1.26243 13.6763 1.73757 13.6763 2.03063 13.9694L6 17.9397L9.96937 13.9694C10.1101 13.8285 10.3009 13.7494 10.5 13.7494C10.6991 13.7494 10.8899 13.8285 11.0306 13.9694ZM2.03063 6.03063L6 2.06031L9.96937 6.03063C10.2624 6.32368 10.7376 6.32368 11.0306 6.03063C11.3237 5.73757 11.3237 5.26243 11.0306 4.96938L6.53063 0.469375C6.38995 0.328542 6.19906 0.24941 6 0.24941C5.80094 0.24941 5.61005 0.328542 5.46937 0.469375L0.969375 4.96938C0.676319 5.26243 0.676319 5.73757 0.969375 6.03063C1.26243 6.32368 1.73757 6.32368 2.03063 6.03063Z" fill="#8FABCC"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="summary-cards">
        {summaryData.map((item, index) => (
          <div key={index} className="summary-card">
            <div className="summary-label">{item.label}</div>
            <div className="summary-value">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="cre-section">
        <div className="section-header">
          <h2>CRE Performance</h2>
          <div className="action-buttons">
            <button className="download-btn">Download</button>
            <button className="export-btn">Export</button>
          </div>
        </div>

        <div className="table-container">
          <table className="performance-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>CRE Name</th>
                <th>Attempted</th>
                <th>Contacted</th>
                <th>Scheduled</th>
                <th>Appointment Confirmation</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((row) => (
                <tr key={row.sno}>
                  <td>{row.sno}</td>
                  <td>{row.name}</td>
                  <td>{row.attempted}</td>
                  <td>{row.contacted}</td>
                  <td>{row.scheduled}</td>
                  <td>{row.confirmation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="pagination-button">
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.64792 12.2273C7.86771 12.4471 7.86771 12.8035 7.64792 13.0233C7.42813 13.2431 7.07178 13.2431 6.85199 13.0233L1.22699 7.39828C1.12136 7.29277 1.06201 7.14961 1.06201 7.00031C1.06201 6.85102 1.12136 6.70785 1.22699 6.60234L6.85199 0.977344C7.07178 0.757552 7.42813 0.757552 7.64792 0.977344C7.86771 1.19714 7.86771 1.55349 7.64792 1.77328L2.42019 7.00031L7.64792 12.2273Z" fill="white" stroke="white"/>
            </svg>
          </button>
          <button className="pagination-button active">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button">3</button>
          <button className="pagination-button">
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.35208 1.77266C1.13229 1.55286 1.13229 1.19651 1.35208 0.976719C1.57187 0.756927 1.92822 0.756927 2.14801 0.976719L7.77301 6.60172C7.87864 6.70723 7.93799 6.85039 7.93799 6.99969C7.93799 7.14898 7.87864 7.29215 7.77301 7.39766L2.14801 13.0227C1.92822 13.2424 1.57187 13.2424 1.35208 13.0227C1.13229 12.8029 1.13229 12.4465 1.35208 12.2267L6.57981 6.99969L1.35208 1.77266Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CREPerformance
