import React from 'react'

const PieChart = ({ percentage = 90 }) => {
  const radius = 82.5
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="pie-chart-container">
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
        <rect width="120" height="80" fill="#111C27"/>

        {/* Background circle */}
        <circle
          cx="60"
          cy="40"
          r="35"
          fill="none"
          stroke="#21364A"
          strokeWidth="3"
        />

        {/* Progress circle */}
        <circle
          cx="60"
          cy="40"
          r="35"
          fill="none"
          stroke="#338FF2"
          strokeWidth="3"
          strokeDasharray={Math.PI * 70}
          strokeDashoffset={Math.PI * 70 - (percentage / 100) * Math.PI * 70}
          strokeLinecap="round"
          transform="rotate(-90 60 40)"
        />

        {/* Yellow accent */}
        <path
          d="M40 40L80 40"
          stroke="#EAB308"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default PieChart
