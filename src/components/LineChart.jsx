import React from 'react'

const LineChart = () => {
  const data = [
    { time: '10am-11am', value: 15 },
    { time: '11am-1pm', value: 35 },
    { time: '1pm-2pm', value: 55 },
    { time: '2pm-3pm', value: 85 },
    { time: '3pm-5pm', value: 70 },
    { time: '5pm-7pm', value: 75 }
  ]

  const maxValue = 100
  const chartHeight = 180
  const chartWidth = 400

  const points = data.map((item, index) => {
    const x = 60 + (index * 60)
    const y = chartHeight - (item.value / maxValue) * 150
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="line-chart-container">
      <svg width="100%" height="120" viewBox="0 0 423 238" fill="none">
        <defs>
          <clipPath id="chartClip">
            <rect width="423" height="238" rx="12" fill="white"/>
          </clipPath>
        </defs>

        <g clipPath="url(#chartClip)">
          {/* Grid lines - horizontal */}
          {[0, 30, 60, 90, 100].map((value, index) => (
            <line
              key={value}
              x1="43"
              y1={36 + (index * 37.5)}
              x2="306"
              y2={36 + (index * 37.5)}
              stroke="#808080"
              strokeOpacity="0.55"
            />
          ))}

          {/* Grid lines - vertical */}
          {data.map((item, index) => (
            <line
              key={index}
              x1={60 + (index * 60)}
              y1="36"
              x2={60 + (index * 60)}
              y2="211"
              stroke="#808080"
              strokeOpacity="0.55"
            />
          ))}

          {/* Y-axis labels */}
          {[100, 90, 60, 30, 0].map((value, index) => (
            <text
              key={value}
              x="35"
              y={45 + (index * 37.5)}
              fill="white"
              fontSize="8"
              textAnchor="end"
            >
              {value}
            </text>
          ))}

          {/* X-axis labels */}
          {data.map((item, index) => (
            <text
              key={index}
              x={60 + (index * 60)}
              y="230"
              fill="white"
              fontSize="8"
              textAnchor="middle"
            >
              {item.time}
            </text>
          ))}

          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke="#2CAFFE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {data.map((item, index) => {
            const x = 60 + (index * 60)
            const y = chartHeight - (item.value / maxValue) * 150
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#2CAFFE"
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}

export default LineChart
