import React from 'react'

const PieChart = ({ percentage = 90 }) => {
  const size = 100
  const radius = size / 2
  const angle = (percentage / 100) * 360
  const radians = (angle - 90) * (Math.PI / 180)
  const x = radius + radius * Math.cos(radians)
  const y = radius + radius * Math.sin(radians)
  const largeArcFlag = percentage > 50 ? 1 : 0

  // Path for the yellow segment
  const yellowPath = `
    M ${radius} ${radius}
    L ${radius} 0
    A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x} ${y}
    Z
  `

  return (
    <div className="pie-chart-container">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Blue base */}
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          fill="#EAB308"
        />
        {/* Yellow segment */}
        <path
          d={yellowPath}
          fill="#338FF2"
        />
      </svg>
    </div>
  )
}

export default PieChart
