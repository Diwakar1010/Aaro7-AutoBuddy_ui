import React, { useState } from 'react'
import '../styles/AgentEarnings.css'

const AgentEarnings = () => {
  const [selectedView, setSelectedView] = useState('This Month')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const views = ['Today', 'This Week', 'This Month', 'This Year']
  return (
    <div className="agent-earnings-page">
      <div className="agent-earnings-header">
        <div className="agent-earnings-title-section">
          <h1 className="agent-page-title">Earnings</h1>
        </div>
        <div className="month-view-dropdown">
          <div
            className="agent-dropdown"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="agent-dropdown-text">{selectedView}</span>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.0306 13.9694C11.1715 14.1101 11.2506 14.3009 11.2506 14.5C11.2506 14.6991 11.1715 14.8899 11.0306 15.0306L6.53063 19.5306C6.38995 19.6715 6.19906 19.7506 6 19.7506C5.80094 19.7506 5.61005 19.6715 5.46937 19.5306L0.969375 15.0306C0.676319 14.7376 0.676319 14.2624 0.969375 13.9694C1.26243 13.6763 1.73757 13.6763 2.03063 13.9694L6 17.9397L9.96937 13.9694C10.1101 13.8285 10.3009 13.7494 10.5 13.7494C10.6991 13.7494 10.8899 13.8285 11.0306 13.9694ZM2.03063 6.03063L6 2.06031L9.96937 6.03063C10.2624 6.32368 10.7376 6.32368 11.0306 6.03063C11.3237 5.73757 11.3237 5.26243 11.0306 4.96938L6.53063 0.469375C6.38995 0.328542 6.19906 0.24941 6 0.24941C5.80094 0.24941 5.61005 0.328542 5.46937 0.469375L0.969375 4.96938C0.676319 5.26243 0.676319 5.73757 0.969375 6.03063C1.26243 6.32368 1.73757 6.32368 2.03063 6.03063Z" fill="#8FABCC" />
            </svg>
            {dropdownOpen && (
              <div className="agent-dropdown-menu">
                {views.map(view => (
                  <div
                    key={view}
                    className={`agent-dropdown-item${selectedView === view ? ' selected' : ''}`}
                    onClick={() => {
                      setSelectedView(view)
                      setDropdownOpen(false)
                    }}
                  >
                    {view}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="agent-earnings-content">
        <div className="earnings-metrics-grid">
          <div className="earnings-metric-card">
            <div className="earnings-metric-label">Total Earnings</div>
            <div className="earnings-metric-row">
              <svg className="earnings-icon" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25H9.73594C9.74437 5.37375 9.75 5.49844 9.75 5.625C9.74638 8.7301 7.2301 11.2464 4.125 11.25H2.68969L9.50438 17.445C9.70642 17.6242 9.79649 17.8983 9.74017 18.1624C9.68385 18.4266 9.48985 18.6401 9.23227 18.7213C8.97469 18.8026 8.69331 18.739 8.49562 18.555L0.245625 11.055C0.016335 10.8466 -0.0611906 10.5186 0.0505123 10.2296C0.162215 9.94061 0.440149 9.75003 0.75 9.75H4.125C6.4021 9.74742 8.24742 7.9021 8.25 5.625C8.25 5.49844 8.24344 5.37375 8.23219 5.25H0.75C0.335786 5.25 0 4.91421 0 4.5C0 4.08579 0.335786 3.75 0.75 3.75H7.79719C7.09287 2.36982 5.6745 1.50077 4.125 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0H12.75C13.1642 0 13.5 0.335786 13.5 0.75C13.5 1.16421 13.1642 1.5 12.75 1.5H7.94438C8.61338 2.11907 9.1223 2.89112 9.4275 3.75H12.75C13.1642 3.75 13.5 4.08579 13.5 4.5Z" fill="white" />
              </svg>
              <div className="earnings-metric-value">58,200</div>
            </div>
          </div>

          <div className="earnings-metric-card">
            <div className="earnings-metric-header">
              <div className="earnings-metric-label">Target</div>
            </div>
            <div className="earnings-metric-row">
              <svg className="earnings-icon" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25H9.73594C9.74437 5.37375 9.75 5.49844 9.75 5.625C9.74638 8.7301 7.2301 11.2464 4.125 11.25H2.68969L9.50438 17.445C9.70642 17.6242 9.79649 17.8983 9.74017 18.1624C9.68385 18.4266 9.48985 18.6401 9.23227 18.7213C8.97469 18.8026 8.69331 18.739 8.49562 18.555L0.245625 11.055C0.016335 10.8466 -0.0611906 10.5186 0.0505123 10.2296C0.162215 9.94061 0.440149 9.75003 0.75 9.75H4.125C6.4021 9.74742 8.24742 7.9021 8.25 5.625C8.25 5.49844 8.24344 5.37375 8.23219 5.25H0.75C0.335786 5.25 0 4.91421 0 4.5C0 4.08579 0.335786 3.75 0.75 3.75H7.79719C7.09287 2.36982 5.6745 1.50077 4.125 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0H12.75C13.1642 0 13.5 0.335786 13.5 0.75C13.5 1.16421 13.1642 1.5 12.75 1.5H7.94438C8.61338 2.11907 9.1223 2.89112 9.4275 3.75H12.75C13.1642 3.75 13.5 4.08579 13.5 4.5Z" fill="white" />
              </svg>
              <div className="earnings-metric-value">50,000</div>
            </div>
          </div>

          <div className="earnings-metric-card">
            <div className="earnings-metric-header">
              <div className="earnings-metric-label">Projected Earnings</div>
            </div>
            <div className="earnings-metric-row">
              <svg className="earnings-icon" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25H9.73594C9.74437 5.37375 9.75 5.49844 9.75 5.625C9.74638 8.7301 7.2301 11.2464 4.125 11.25H2.68969L9.50438 17.445C9.70642 17.6242 9.79649 17.8983 9.74017 18.1624C9.68385 18.4266 9.48985 18.6401 9.23227 18.7213C8.97469 18.8026 8.69331 18.739 8.49562 18.555L0.245625 11.055C0.016335 10.8466 -0.0611906 10.5186 0.0505123 10.2296C0.162215 9.94061 0.440149 9.75003 0.75 9.75H4.125C6.4021 9.74742 8.24742 7.9021 8.25 5.625C8.25 5.49844 8.24344 5.37375 8.23219 5.25H0.75C0.335786 5.25 0 4.91421 0 4.5C0 4.08579 0.335786 3.75 0.75 3.75H7.79719C7.09287 2.36982 5.6745 1.50077 4.125 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0H12.75C13.1642 0 13.5 0.335786 13.5 0.75C13.5 1.16421 13.1642 1.5 12.75 1.5H7.94438C8.61338 2.11907 9.1223 2.89112 9.4275 3.75H12.75C13.1642 3.75 13.5 4.08579 13.5 4.5Z" fill="white" />
              </svg>
              <div className="earnings-metric-value">58,900</div>
              <svg className="earnings-up-arrow" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 17.9999L12.3333 25.6666L10 23.3333L20 13.3333L30 23.3333L27.6667 25.6666L20 17.9999Z" fill="#00B515" />
              </svg>
            </div>
          </div>
        </div>

        <div className="earnings-chart-section">
          <h2 className="chart-section-title">Earnings Over Time</h2>
          <div className="earnings-bar-chart">
            <div className="chart-wrapper">
              <div className="y-axis">
                <div className="y-axis-label">70,000</div>
                <div className="y-axis-label">60,000</div>
                <div className="y-axis-label">50,000</div>
                <div className="y-axis-label">40,000</div>
                <div className="y-axis-label">30,000</div>
                <div className="y-axis-label">20,000</div>
                <div className="y-axis-label">0</div>
              </div>
              <div className="chart-area">
                <div className="chart-grid">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>
                <div className="bars-container">
                  <div className="bar-group">
                    <div className="bar" style={{ height: '30%' }}></div>
                    <div className="month-label">April</div>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: '36%' }}></div>
                    <div className="month-label">May</div>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: '40%' }}></div>
                    <div className="month-label">June</div>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: '55%' }}></div>
                    <div className="month-label">July</div>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: '70%' }}></div>
                    <div className="month-label">August</div>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: '70%' }}></div>
                    <div className="month-label">Sep</div>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: '100%' }}></div>
                    <div className="month-label">Oct</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="earnings-breakdown-grid">
          <div className="earnings-breakdown-card">
              <div className="earnings-breakdown-label">Base Amount</div>
            <div className="earnings-breakdown-row">
              <svg className="earnings-icon" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25H9.73594C9.74437 5.37375 9.75 5.49844 9.75 5.625C9.74638 8.7301 7.2301 11.2464 4.125 11.25H2.68969L9.50438 17.445C9.70642 17.6242 9.79649 17.8983 9.74017 18.1624C9.68385 18.4266 9.48985 18.6401 9.23227 18.7213C8.97469 18.8026 8.69331 18.739 8.49562 18.555L0.245625 11.055C0.016335 10.8466 -0.0611906 10.5186 0.0505123 10.2296C0.162215 9.94061 0.440149 9.75003 0.75 9.75H4.125C6.4021 9.74742 8.24742 7.9021 8.25 5.625C8.25 5.49844 8.24344 5.37375 8.23219 5.25H0.75C0.335786 5.25 0 4.91421 0 4.5C0 4.08579 0.335786 3.75 0.75 3.75H7.79719C7.09287 2.36982 5.6745 1.50077 4.125 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0H12.75C13.1642 0 13.5 0.335786 13.5 0.75C13.5 1.16421 13.1642 1.5 12.75 1.5H7.94438C8.61338 2.11907 9.1223 2.89112 9.4275 3.75H12.75C13.1642 3.75 13.5 4.08579 13.5 4.5Z" fill="white" />
              </svg>
              <div className="earnings-breakdown-value">20,000</div>
            </div>
          </div>

          <div className="earnings-breakdown-card">
              <div className="earnings-breakdown-label">Insurance Commission</div>
            <div className="earnings-breakdown-row">
              <svg className="earnings-icon" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25H9.73594C9.74437 5.37375 9.75 5.49844 9.75 5.625C9.74638 8.7301 7.2301 11.2464 4.125 11.25H2.68969L9.50438 17.445C9.70642 17.6242 9.79649 17.8983 9.74017 18.1624C9.68385 18.4266 9.48985 18.6401 9.23227 18.7213C8.97469 18.8026 8.69331 18.739 8.49562 18.555L0.245625 11.055C0.016335 10.8466 -0.0611906 10.5186 0.0505123 10.2296C0.162215 9.94061 0.440149 9.75003 0.75 9.75H4.125C6.4021 9.74742 8.24742 7.9021 8.25 5.625C8.25 5.49844 8.24344 5.37375 8.23219 5.25H0.75C0.335786 5.25 0 4.91421 0 4.5C0 4.08579 0.335786 3.75 0.75 3.75H7.79719C7.09287 2.36982 5.6745 1.50077 4.125 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0H12.75C13.1642 0 13.5 0.335786 13.5 0.75C13.5 1.16421 13.1642 1.5 12.75 1.5H7.94438C8.61338 2.11907 9.1223 2.89112 9.4275 3.75H12.75C13.1642 3.75 13.5 4.08579 13.5 4.5Z" fill="white" />
              </svg>
              <div className="earnings-breakdown-value">12,600</div>
            </div>
          </div>

          <div className="earnings-breakdown-card">
            <div className="earnings-breakdown-header">
              <div className="earnings-breakdown-label">Additional Incentives</div>
              <svg className="info-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.20312 9.54688C7.20312 9.9352 6.88833 10.25 6.5 10.25C6.11167 10.25 5.79688 9.9352 5.79688 9.54688C5.79688 9.15855 6.11167 8.84375 6.5 8.84375C6.88833 8.84375 7.20312 9.15855 7.20312 9.54688ZM6.5 3.21875C5.20742 3.21875 4.15625 4.16504 4.15625 5.32812V5.5625C4.15625 5.82138 4.36612 6.03125 4.625 6.03125C4.88388 6.03125 5.09375 5.82138 5.09375 5.5625V5.32812C5.09375 4.68359 5.7248 4.15625 6.5 4.15625C7.2752 4.15625 7.90625 4.68359 7.90625 5.32812C7.90625 5.97266 7.2752 6.5 6.5 6.5C6.24112 6.5 6.03125 6.70987 6.03125 6.96875V7.4375C6.03125 7.69638 6.24112 7.90625 6.5 7.90625C6.75888 7.90625 6.96875 7.69638 6.96875 7.4375V7.39531C8.0375 7.19902 8.84375 6.34648 8.84375 5.32812C8.84375 4.16504 7.79258 3.21875 6.5 3.21875ZM12.5938 6.5C12.5938 9.86549 9.86549 12.5938 6.5 12.5938C3.13451 12.5938 0.40625 9.86549 0.40625 6.5C0.40625 3.13451 3.13451 0.40625 6.5 0.40625C9.86401 0.409802 12.5902 3.13599 12.5938 6.5ZM11.6562 6.5C11.6562 3.65228 9.34772 1.34375 6.5 1.34375C3.65228 1.34375 1.34375 3.65228 1.34375 6.5C1.34375 9.34772 3.65228 11.6562 6.5 11.6562C9.34638 11.653 11.653 9.34638 11.6562 6.5Z" fill="white" />
              </svg>
            </div>
            <div className="earnings-breakdown-row">
              <svg className="earnings-icon" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25H9.73594C9.74437 5.37375 9.75 5.49844 9.75 5.625C9.74638 8.7301 7.2301 11.2464 4.125 11.25H2.68969L9.50438 17.445C9.70642 17.6242 9.79649 17.8983 9.74017 18.1624C9.68385 18.4266 9.48985 18.6401 9.23227 18.7213C8.97469 18.8026 8.69331 18.739 8.49562 18.555L0.245625 11.055C0.016335 10.8466 -0.0611906 10.5186 0.0505123 10.2296C0.162215 9.94061 0.440149 9.75003 0.75 9.75H4.125C6.4021 9.74742 8.24742 7.9021 8.25 5.625C8.25 5.49844 8.24344 5.37375 8.23219 5.25H0.75C0.335786 5.25 0 4.91421 0 4.5C0 4.08579 0.335786 3.75 0.75 3.75H7.79719C7.09287 2.36982 5.6745 1.50077 4.125 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0H12.75C13.1642 0 13.5 0.335786 13.5 0.75C13.5 1.16421 13.1642 1.5 12.75 1.5H7.94438C8.61338 2.11907 9.1223 2.89112 9.4275 3.75H12.75C13.1642 3.75 13.5 4.08579 13.5 4.5Z" fill="white" />
              </svg>
              <div className="earnings-breakdown-value">25,600</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentEarnings
