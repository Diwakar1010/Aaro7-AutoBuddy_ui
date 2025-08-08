import React, { useState } from 'react'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import '../styles/Performance.css'

const Performance = () => {
  const [selectedView, setSelectedView] = useState('Today')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const views = ['Today', 'This Week', 'This Month', 'This Year']

  return (
    <div className="performance-page">
      <div className="performance-header">
        <h1 className="page-title">Performance</h1>
        <div className="ai-insights-card">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ba9c5e4c1faf10a817aeda22df76d42defd2ef19?width=36"
              alt="Trophy"
              className="trophy-icon"
            />
            <div className="ai-insights-text">
              <div className="ai-insights-title">AI Insights</div>
              <div className="ai-insights-prediction">Today's Top CRE Prediction Priya</div>
            </div>
          </div>
        <div className="time-selector">
          <div
            className="dropdown"
            tabIndex={0}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onBlur={() => setDropdownOpen(false)}
          >
            <span>{selectedView}</span>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.0306 13.9694C11.1715 14.1101 11.2506 14.3009 11.2506 14.5C11.2506 14.6991 11.1715 14.8899 11.0306 15.0306L6.53063 19.5306C6.38995 19.6715 6.19906 19.7506 6 19.7506C5.80094 19.7506 5.61005 19.6715 5.46937 19.5306L0.969375 15.0306C0.676319 14.7376 0.676319 14.2624 0.969375 13.9694C1.26243 13.6763 1.73757 13.6763 2.03063 13.9694L6 17.9397L9.96937 13.9694C10.1101 13.8285 10.3009 13.7494 10.5 13.7494C10.6991 13.7494 10.8899 13.8285 11.0306 13.9694ZM2.03063 6.03063L6 2.06031L9.96937 6.03063C10.2624 6.32368 10.7376 6.32368 11.0306 6.03063C11.3237 5.73757 11.3237 5.26243 11.0306 4.96938L6.53063 0.469375C6.38995 0.328542 6.19906 0.24941 6 0.24941C5.80094 0.24941 5.61005 0.328542 5.46937 0.469375L0.969375 4.96938C0.676319 5.26243 0.676319 5.73757 0.969375 6.03063C1.26243 6.32368 1.73757 6.32368 2.03063 6.03063Z" fill="#8FABCC"/>
            </svg>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {views.map(view => (
                  <div
                    key={view}
                    className={`dropdown-item${selectedView === view ? ' selected' : ''}`}
                    onMouseDown={() => {
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

      <div className="performance-content">
        <div className="top-section">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-label">Leads Allocated</div>
              <div className="metric-value">1200</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Leads Attempted</div>
              <div className="metric-value">1080</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Leads Contacted</div>
              <div className="metric-value">832</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Leads Converted</div>
              <div className="metric-value">500</div>
            </div>
          </div>
        </div>

        <div className="charts-section">
          <div className="pie-charts-row">
            <div className="chart-container">
              <h3 className="chart-title">Leads Allocated Vs Attempted</h3>
              <PieChart percentage={90} />
              <div className="chart-percentage">90%</div>
            </div>
            <div className="chart-container">
              <h3 className="chart-title">Leads Attempted Vs Contacted</h3>
              <PieChart percentage={77} />
              <div className="chart-percentage">77%</div>
            </div>
            <div className="chart-container">
              <h3 className="chart-title">Leads Contacted Vs Converted</h3>
              <PieChart percentage={60} />
              <div className="chart-percentage">60%</div>
            </div>
          </div>

          <div className="bottom-charts">
            <div className="chart-section">
              <h3 className="chart-title">Short Rings</h3>
              <BarChart />
            </div>
            <div className="chart-section">
              <h3 className="chart-title">Calls by Time Block</h3>
              <LineChart />
            </div>
          </div>

          <div className="target-cards">
            <div className="target-card">
              <h3>Total # of Insurance</h3>
              <p>Target Vs Achieved</p>
              <div className="target-value">1200 Vs 500</div>
            </div>
            <div className="target-card">
              <h3>Total OD Amount</h3>
              <p>Target Vs Achieved</p>
              <div className="target-value">2.4 Cr Vs 1 Cr</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Performance
