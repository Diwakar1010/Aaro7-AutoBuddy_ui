import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <main className="page-container">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
