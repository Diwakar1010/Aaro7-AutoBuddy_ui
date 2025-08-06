import React from 'react'

const BarChart = () => {
  const data = [
    { name: 'Anusha', value: 1 },
    { name: 'Sirisha', value: 3 },
    { name: 'Suma', value: 5 },
    { name: 'Divya', value: 6 },
    { name: 'Monica', value: 7 },
    { name: 'Priya', value: 11 },
    { name: 'Nidhi kumari', value: 15 }
  ]

  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div className="bar-chart-container">
      <svg width="100%" height="120" viewBox="0 0 357 229" fill="none">
        {/* Grid lines */}
        {[0, 2, 5, 8, 10, 12, 15].map((value, index) => (
          <line
            key={value}
            x1="36"
            y1={13 + (index * 24)}
            x2="353"
            y2={13 + (index * 24)}
            stroke="#808080"
            strokeOpacity="0.55"
          />
        ))}

        {/* Y-axis labels */}
        {[15, 12, 10, 8, 5, 2, 0].map((value, index) => (
          <text
            key={value}
            x="30"
            y={18 + (index * 24)}
            fill="white"
            fontSize="5"
            textAnchor="end"
          >
            {value}
          </text>
        ))}

        {/* Bars */}
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * 140
          const barY = 153 - barHeight
          const barX = 40 + (index * 45)

          return (
            <g key={item.name}>
              <rect
                x={barX}
                y={barY}
                width="20"
                height={barHeight}
                fill="#338FF2"
              />
              <text
                x={barX + 10}
                y={barY - 5}
                fill="white"
                fontSize="8"
                textAnchor="middle"
              >
                {item.value}
              </text>
              <text
                x={barX + 10}
                y="175"
                fill="white"
                fontSize="8"
                textAnchor="middle"
                transform={`rotate(-45 ${barX + 10} 175)`}
              >
                {item.name}
              </text>
            </g>
          )
        })}

        {/* X-axis */}
        <line
          x1="36"
          y1="153"
          x2="353"
          y2="153"
          stroke="white"
        />
      </svg>
    </div>
  )
}

export default BarChart
