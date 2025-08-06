# Aaro7 AutoBuddy Dashboard

A responsive React dashboard application built with Vite for managing CRE performance, lead allocation, and approvals.

## Features

- **Performance Dashboard**: Overview of leads metrics with interactive charts
- **CRE Performance**: Detailed performance table for CRE agents
- **Lead Allocation**: Interface for allocating leads to agents
- **Approvals**: Management of approval requests and history
- **Responsive Design**: Fits browser window without scrolling

## Tech Stack

- React 18
- Vite
- React Router DOM
- CSS3 (Custom Properties)
- SVG Icons

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aaro7-autobuddy-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.jsx
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── PieChart.jsx
│   ├── BarChart.jsx
│   └── LineChart.jsx
├── pages/              # Page components
│   ├── Performance.jsx
│   ├── CREPerformance.jsx
│   ├── LeadAllocation.jsx
│   ├── Approvals.jsx
│   └── ApprovalsDetail.jsx
├── styles/             # CSS files
│   ├── index.css
│   ├── Sidebar.css
│   ├── Header.css
│   ├── Performance.css
│   ├── CREPerformance.css
│   ├── LeadAllocation.css
│   ├── Approvals.css
│   └── ApprovalsDetail.css
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## Features

### Dashboard Pages

1. **Performance**: Main dashboard with metrics, pie charts, and bar charts
2. **CRE Performance**: Detailed table view of agent performance
3. **Lead Allocation**: Form and history for lead allocation
4. **Approvals**: List view and detailed approval management

### Responsive Design

- Desktop-first design optimized for 1440px width
- Responsive breakpoints for tablets and mobile devices
- All content fits within viewport without scrolling
- Sidebar collapses to horizontal navigation on mobile

### Navigation

- Sidebar navigation with active state indicators
- React Router for client-side routing
- Breadcrumb support in header

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Style

- Functional React components with hooks
- CSS custom properties for theming
- Semantic HTML structure
- Accessible navigation

## License

MIT License
