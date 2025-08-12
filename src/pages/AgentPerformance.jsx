import React, { useState } from 'react'
import '../styles/AgentPerformance.css'
import PieChart from '../components/PieChart'

const AgentPerformance = () => {
  const [selectedView, setSelectedView] = useState('Today')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const views = ['Today', 'This Week', 'This Month', 'This Year']


  return (
    <div className="agent-performance-page">
      <div className="agent-performance-header">
        <div className="agent-performance-title-section">
          <h1 className="agent-page-title">Performance</h1>
        </div>
        <div className="agent-view-dropdown">
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

      <div className="agent-performance-content">
        {/* <div className="agent-metrics-grid">
          <div className="agent-metric-card">
            <div className="agent-metric-label">Leads Allocated</div>
            <div className="agent-metric-value">120</div>
            <div className="agent-metric-change positive">(+10 from Last Week)</div>
          </div>
          <div className="agent-metric-card">
            <div className="agent-metric-label">Leads Attempted</div>
            <div className="agent-metric-value">96</div>
            <div className="agent-metric-change positive">(+2 from yesterday)</div>
          </div>
          <div className="agent-metric-card">
            <div className="agent-metric-label">Leads Contacted</div>
            <div className="agent-metric-value">86</div>
            <div className="agent-metric-change negative">(-4 from yesterday)</div>
          </div>
          <div className="agent-metric-card">
            <div className="agent-metric-label">Leads Converted</div>
            <div className="agent-metric-value">52</div>
            <div className="agent-metric-change positive">(+12 from Last Week)</div>
          </div>
        </div> */}
        <div className="agent-metrics-grid">
          <div className="agent-metric-card">
            <div className="agent-metric-label">Leads Allocated</div>
            <div className="metric-row">
              <div className="agent-metric-value">120</div>
              <div className="agent-metric-change positive">(+10 from Last Week)</div>
            </div>
          </div>

          <div className="agent-metric-card">
            <div className="agent-metric-label">Leads Attempted</div>
            <div className="metric-row">
              <div className="agent-metric-value">96</div>
              <div className="agent-metric-change positive">(+2 from yesterday)</div>
            </div>
          </div>

          <div className="agent-metric-card">
            <div className="agent-metric-label">Leads Contacted</div>
            <div className="metric-row">
              <div className="agent-metric-value">86</div>
              <div className="agent-metric-change negative">(-4 from yesterday)</div>
            </div>
          </div>

          <div className="agent-metric-card">
            <div className="agent-metric-label">Leads Converted</div>
            <div className="metric-row">
              <div className="agent-metric-value">52</div>
              <div className="agent-metric-change positive">(+12 from Last Week)</div>
            </div>
          </div>
        </div>

        <div className="agent-charts-section">
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
        </div>
        {/* // Add this below the agent-charts-section in AgentPerformance.jsx */}
        {/* <div className="agent-custom-cards-grid">
          <div className="custom-card custom-card-large">
            <div className="card-inner">
              <div className="percent">80%</div>
              <h4 className="card-title">Total # of Insurance</h4>
              <div className="card-sub">Target Vs Achieved</div>
              <div className="target-value">120 Vs 52</div>
            </div>
          </div>

          <div className="custom-card ai-insights-card">
            <div className="card-inner">
              <h4 className="card-title">AI Insights for you</h4>
              <ul className="insights-list">
                <li>📞 <span>You contact more leads than 60% of your peers. Great job!</span></li>
                <li>⏰ <span>Your highest conversation rate is between 1-3 PM. Prioritize follow ups.</span></li>
                <li>🔥 <span>Leads you called twice have a 2× higher chance of conversation.</span></li>
              </ul>
            </div>
          </div>

          <div className="custom-card custom-card-tall">
            <div className="card-inner">
              <h4 className="card-title center">You Vs Top Performer</h4>
              <div className="compare-table">
                <div className="row header">
                  <div></div><div>You</div><div>Top Performer</div>
                </div>
                <div className="row"><div>Leads Contacted</div><div>86</div><div>60</div></div>
                <div className="row"><div>Insurance Converted</div><div>52</div><div>100</div></div>
                <div className="row"><div>OD Amount</div><div>24 L</div><div>0</div></div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="agent-custom-cards-grid">
          <div className="custom-card custom-card-large">
            <div className="card-inner">
              <h4 className="card-title">Total # of Insurance</h4>
              <div className="card-sub">Target Vs Achieved</div>
              <div className="target-value">120 Vs 52</div>
            </div>
          </div>

          {/* Insights card moved visually below custom-card-large and over sidebar */}
          <div className="custom-card ai-insights-card-agent floating-insight">
            <div className="card-inner">
              <h4 className="card-title">AI Insights for you</h4>
              <ul className="insights-list">
                <li>📞 <span>You contact more leads than 60% of your peers. Great job!</span></li>
                <li>⏰ <span>Your highest conversation rate is between 1-3 PM. Prioritize follow ups.</span></li>
                <li>🔥 <span>Leads you called twice have a 2× higher chance of conversation.</span></li>
              </ul>
            </div>
          </div>

          <div className="custom-card custom-card-tall">
            <div className="card-inner">
              <h4 className="card-title center">You Vs Top Performer</h4>
              <div className="compare-table">
                <div className="row header">
                  <div></div><div>You</div><div>Top Performer</div>
                </div>
                <div className="row"><div>Leads Contacted</div><div>86</div><div>60</div></div>
                <div className="row"><div>Insurance Converted</div><div>52</div><div>100</div></div>
                <div className="row"><div>OD Amount</div><div>24 L</div><div>0</div></div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AgentPerformance
